import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");

  //   return <div>Page</div>;
};
export default page;
