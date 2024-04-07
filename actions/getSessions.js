import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function getSessions() {
  const session = await getServerSession(authOptions);
  return session;
}
