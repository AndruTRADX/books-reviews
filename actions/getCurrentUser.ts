import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    return session;
  } catch (error: any) {
    return null;
  }
}
