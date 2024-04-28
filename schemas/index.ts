import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(1, {
        message: "Password is Required"
    }),
    code: z.optional(z.string()),
});
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(1, {
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is Required"
    }),
});