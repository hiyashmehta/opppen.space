import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
    getDetails: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const loggedInUser = ctx.session.user;
            if (!loggedInUser) {
                throw new Error("You must be logged in to view user details");
            }
            const user = ctx.db.user.findUnique({
                where: {
                    id: input.id,
                },
            });
            return user;
        }),
});
