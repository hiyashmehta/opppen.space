"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const session = useSession();

	if (session.status === "loading") {
		return (
			<main className="flex min-h-screen w-full items-center justify-center">
				<p>Loading...</p>
			</main>
		);
	}
	if (session.status === "authenticated" && session.data.user.email) {
		redirect("/");
	}
	return (
		<main className="flex min-h-screen w-full items-center justify-center">
			{children}
		</main>
	);
};

export default Layout;
