import prisma from "@/db/prismadb";
import getSessions from "./getSessions";

const getUsers = async () => {
  const session = await getSessions();

  if (!session?.user?.email) {
    return [];
  }
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });
    return users;
  } catch (error) {
    return [];
  }
};

export default getUsers;
