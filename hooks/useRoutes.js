import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversations from "./useConversations";
import { toast } from "react-hot-toast";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversations();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowLeftOnRectangle,
        onClick: () => {
          toast.success("Logged out");
          signOut();
        },
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
