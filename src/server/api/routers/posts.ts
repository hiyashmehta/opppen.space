import { z } from "zod";

import { createPostSchema, updatePostSchema } from "@/features/posts/schema";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const postsRouter = createTRPCRouter({
    create: protectedProcedure
        .input(createPostSchema)
        .mutation(async ({ ctx, input }) => {
            const {
                title,
                htmlContent,
                communityId,
                image,
                // tags,
                status,
                content,
            } = input;
            const user = ctx.session.user;
            if (!user) {
                throw new Error("You must be logged in to create a community");
            }
            const post = await ctx.db.post.create({
                data: {
                    title,
                    communityId,
                    authorId: user.id,
                    htmlContent,
                    userId: user.id,
                    image: image ?? "",
                    content,
                    // tags: tags ?? [],
                    status,
                    slug: title.toLowerCase().replace(/ /g, "-"),
                },
            });
            console.log("Post created", post);
            return post ?? {};
        }),
    update: protectedProcedure
        .input(updatePostSchema)
        .mutation(async ({ ctx, input }) => {
            const {
                title,
                htmlContent,
                communityId,
                image,
                // tags,
                status,
                content,
                slug,
            } = input;
            const user = ctx.session.user;

            if (!user) {
                throw new Error("You must be logged in to create a community");
            }

            const post = await ctx.db.post.update({
                data: {
                    title,
                    communityId,
                    authorId: user.id,
                    htmlContent,
                    userId: user.id,
                    image: image ?? "",
                    content,
                    // tags: tags ?? [],
                    status,
                    slug,
                    // slug: title.toLowerCase().replace(/ /g, "-"),
                },
                where: {
                    id: input.id,
                    communityId: input.communityId,
                },
            });
            console.log("Post created", post);
            return post ?? {};
        }),
    delete: protectedProcedure
        .input(
            z.object({
                communityId: z.string(),
                id: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const { communityId, id } = input;
            const user = ctx.session.user;

            if (!user) {
                throw new Error("You must be logged in to create a community");
            }

            const post = await ctx.db.post.delete({
                where: {
                    id: id,
                    communityId: communityId,
                },
            });
            console.log("Post deleted", post);
            return post ?? {};
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
