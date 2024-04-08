import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/db/prismadb";

export async function POST(request, response) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId, isGroup, members, name } = body;

    // start with some validations logic step:01

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    // creating group conversation logic step:02

    if (isGroup) {
      const newConversation = await prisma.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member) => ({
                id: member.value,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      });
      return NextResponse.json(newConversation);


      //check existing conversation logic step:03

    //   const existingConversation = await prisma.conversation.findMany({
    //     where: {
    //       OR: [
    //         {
    //           userIds: {
    //             equals: [currentUser.id, userId],
    //           },
    //         },
    //         {
    //           userIds: {
    //             equals: [userId, currentUser.id],
    //           },
    //         },
    //       ],
    //     },
    //   });

    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
