import clientPromise from "@/lib/db";
import React from "react";

export default async function Page() {
	const mongoDb = await clientPromise;
	const collection = mongoDb.db().collection("test");
	console.log({ collection });
	return <div>Page</div>;
}
