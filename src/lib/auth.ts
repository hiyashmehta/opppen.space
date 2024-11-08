import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: `/login`,
        verifyRequest: `/login`,
        error: "/login", // Error code passed in query string as ?error=
    },
    adapter: PrismaAdapter(prisma) as Adapter,
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
                domain: VERCEL_DEPLOYMENT ? `.opppen.space` : undefined,
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
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
};

export const getServerAuthSession = () => getServerSession(authOptions);
