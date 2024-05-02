"use client";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with different provider"
        : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>> ({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values, callbackUrl)
            .then((data) => {
                if (data?.error) {
                    form.reset();
                    setError(data.error);
                }

                if (data?.success) {
                    form.reset();
                    setSuccess(data.success);
                }

                if (data?.twoFactor) {
                    setShowTwoFactor(true);
                }
            })
                .catch(() => setError("Something went wrong. Please try again."));
        });
    }

    return (
        <div>
            <CardWrapper
                headerLabel="Welcome Back!"
                backButtonLabel="Sign Up"
                backButtonHref="/sign-up"
            >
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((onSubmit))}
                className="space-y-6"
            >
                <div className="space-y-4">
                    {showTwoFactor && (
                    <FormField 
                        control={form.control}
                        name="code"
                        render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Two Factor Code.</FormLabel>
                            <FormControl>
                                <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder="123456"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}  
                    />
                )}
                { !showTwoFactor && (
                    <>
                    <FormField 
                        control={form.control}
                        name="email"
                        render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="johndoe@example.com"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="password"
                        render={ ({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="********"
                                        type="password"
                                    />
                                </FormControl>
                                <Button
                                    size="sm"
                                    variant="link"
                                    asChild
                                    className="px-0 font-normal"
                                >
                                    <Link href="/reset" >
                                        Forget Password?
                                    </Link>
                                </Button>
                            </FormItem>
                        )}
                    />
                    </>
                )}
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full"
                >
                    { showTwoFactor ? "Confirm" : "Login" }
                </Button>
            </form>
        </Form>
        </CardWrapper>
        </div>
    )
}

export default LoginForm