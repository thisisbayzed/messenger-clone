import prisma from "@/db/prismadb";
import getSessions from "./getSessions";

const getCurrentUser = async () => {
  const session = await getSessions();

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return null;
  }

  return currentUser;
};

export default getCurrentUser;
