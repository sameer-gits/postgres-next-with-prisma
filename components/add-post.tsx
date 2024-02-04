"use client";

import { createPost } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";

export function AddButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button type="submit" disabled={pending}>
      Add Post
    </button>
  );
}

export default function AddPost() {
  return (
    <form action={createPost}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="h-10 border border-gray-300 rounded-md p-2"
      />
      <textarea
        name="content"
        placeholder="Content"
        className="border border-gray-300 rounded-md p-2"
      />{" "}
      <AddButton />
    </form>
  );
}
