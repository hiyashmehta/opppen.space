import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const conversationsRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
    createCommunity: protectedProcedure
        .input(
            z.object({
                name: z.string().min(3),
                slug: z.string(),
                description: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const { name, slug, description } = input;
            const user = ctx.session.user;
            if (!user) {
                throw new Error("You must be logged in to create a community");
            }
            const community = await ctx.db.community.create({
                data: {
                    name,
                    slug,
                    description,

                    privacy: "PRIVATE",
                    user: {
                        connect: {
                            id: user.id,
                        },
                    },
                },
            });
            return community;
        }),
    getUserCommunity: protectedProcedure
        .input(
            z.object({
                communityId: z.string(),
            }),
        )
        .query(({ ctx, input }) => {
            const communityId = input.communityId;
            const user = ctx.session.user;

            if (!user) {
                throw new Error("You must be logged in to get a community");
            }
            const community = ctx.db.community.findUnique({
                where: {
                    id: communityId,
                    userId: user.id,
                },
            });
            return community ?? {};
        }),

    getAllCommunities: protectedProcedure.query(({ ctx }) => {
        const user = ctx.session.user;

        if (!user) {
            throw new Error("You must be logged in to get a community");
        }
        const communities = ctx.db.community.findMany({
            where: {
                userId: user.id,
            },
        });
        return communities ?? [];
    }),
    getPublicCommunity: publicProcedure
        .input(z.object({ communityId: z.string() }))
        .query(({ input, ctx }) => {
            const communityId = input.communityId;
            const community = ctx.db.community.findUnique({
                where: {
                    id: communityId,
                },
            });
            return community ?? {};
        }),
});
