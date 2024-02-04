"use client";

import { updatePost } from "@/app/actions";
import { useFormStatus } from "react-dom";

export function UpdateButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button type="submit" disabled={pending}>
      {pending ? <>Updating...</> : <>Update</>}
    </button>
  );
}

export default function UpdatePost({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string | null;
}) {
  return (
    <form action={updatePost.bind(null, id)}>
      <input
        type="text"
        name="title"
        defaultValue={title}
        placeholder="Title"
        required
        className="h-10 border border-gray-300 rounded-md p-2"
      />
      <textarea
        name="content"
        defaultValue={content ?? ""}
        typeof="text"
        placeholder="Content"
        className="border border-gray-300 rounded-md p-2"
      />{" "}
      <UpdateButton />
    </form>
  );
}
