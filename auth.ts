import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";
// import  prisma  from "database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/db";
const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
			profile(profile) {
				return {
					id: profile.id.toString(),
					name: profile.name || profile.login,
					gh_username: profile.login,
					email: profile.email,
					image: profile.avatar_url,
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			// profile(profile) {
			// 	return {
			// 		id: profile.id.toString(),
			// 		name: profile.name || profile.login,
			// 		gh_username: profile.login,
			// 		email: profile.email,
			// 		image: profile.avatar_url,
			// 	};
			// },
		}),
	],
	pages: {
		signIn: `/login`,
		verifyRequest: `/login`,
		error: "/login", // Error code passed in query string as ?error=
	},
	adapter: MongoDBAdapter(clientPromise),
	session: { strategy: "jwt" },
	cookies: {
		sessionToken: {
			name: `${
				VERCEL_DEPLOYMENT ? "__Secure-" : ""
			}next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				// When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
				domain: VERCEL_DEPLOYMENT ? `.saroh.io` : undefined,
				secure: VERCEL_DEPLOYMENT,
			},
		},
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.user = user;
			}
			return token;
		},
		session: async ({ session, token }) => {
			session.user = {
				...session.user,
				// @ts-expect-error
				id: token.sub,
				// @ts-expect-error
				username: token?.user?.username || token?.user?.gh_username,
			};
			return session;
		},
	},
};

export function getSession() {
	return getServerSession(authOptions) as Promise<{
		user: {
			id: string;
			name: string;
			username: string;
			email: string;
			image: string;
		};
	} | null>;
}