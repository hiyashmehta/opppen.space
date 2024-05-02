"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const session = useSession();
	if (session.status === "loading") {
		return (
			<main className="flex min-h-screen w-full items-center justify-center">
				<p>Loading...</p>
			</main>
		);
	}
	if (session.status === "unauthenticated") {
		redirect("/login");
	}
	return (
		<main className="background-light850_dark100 relative">
			{/* <Navbar /> */}
			<div className="flex">
				{/* <LeftSidebar /> */}

				<section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
					<div className="mx-auto w-full max-w-5xl">{children}</div>
				</section>

				{/* <RightSideBar /> */}
			</div>

			{/* <Toaster /> */}
		</main>
	);
};

export default Layout;
