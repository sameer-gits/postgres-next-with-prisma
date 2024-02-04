"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// Creating Post

export async function createPost(data: FormData) {
  const title = data.get("title") as string;
  const content = data.get("content") as string;

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  revalidatePath("/");
  return { success: true };
}

// Deleting Post

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  return { success: true };
}

// Updating Post

export async function updatePost(id: string, data: FormData) {
  const title = data.get("title") as string;
  const content = data.get("content") as string;

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
  revalidatePath("/");
  return { success: true };
}
