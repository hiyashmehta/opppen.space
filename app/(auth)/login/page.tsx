import RegisterForm from "@/components/auth/register-form";
import clientPromise from "@/lib/db";

export default async function Page() {
	const mongoDb = await clientPromise;
	console.log({ mongoDb });
	return (
		<section>
			<RegisterForm />
		</section>
	);
}
