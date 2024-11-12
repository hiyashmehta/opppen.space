import { Post_Status } from "@prisma/client";
import { z } from "zod";

export const createPostSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(10).max(100),
    htmlContent: z.string().min(20),
    image: z.string().optional(),
    communityId: z.string(),
    // tags: z.array(z.string()).optional(),
    status: z.enum([Post_Status.DRAFT, Post_Status.PUBLISHED]),
});

export const updatePostSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(100),
    content: z.string().min(1).max(100),
    htmlContent: z.string().min(1),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum([Post_Status.DRAFT, Post_Status.PUBLISHED]),
    slug: z.string(),
    communityId: z.string(),
});
