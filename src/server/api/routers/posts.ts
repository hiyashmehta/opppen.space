import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const postsRouter = createTRPCRouter({
    create: protectedProcedure
        .input(
            z.object({
                title: z.string().min(3),
                communityId: z.string(),
                htmlContent: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const { title, htmlContent, communityId } = input;
            const user = ctx.session.user;
            if (!user) {
                throw new Error("You must be logged in to create a community");
            }
            const community = await ctx.db.post.create({
                data: {
                    title,
                    communityId,
                    authorId: user.id,
                    htmlContent,
                    userId: user.id,
                    image: "",
                },
            });
            return community ?? {};
        }),

    getPosts: protectedProcedure
        .input(z.object({ communityId: z.string() }))
        .query(async ({ ctx, input }) => {
            const posts = await ctx.db.post.findMany({
                where: {
                    communityId: input.communityId,
                },
            });
            return posts ?? [];
        }),
    getPostDetails: protectedProcedure
        .input(z.object({ communityId: z.string(), postId: z.string() }))
        .query(async ({ ctx, input }) => {
            const post = await ctx.db.post.findUnique({
                where: {
                    communityId: input.communityId,
                    id: input.postId,
                },
            });
            return post;
        }),
});
