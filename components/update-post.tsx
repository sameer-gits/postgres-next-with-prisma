"use client";

import { updatePost } from "@/app/actions";
import { useState } from "react";
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

export function UpdatePostForm({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string | null;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <>
          <form
            action={async (formData) => {
              await updatePost.bind(null, id)(formData);
              setIsEditing(false);
            }}
          >
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
          <button
            className="px-4 p-2 bg-blue-500 rounded-md"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          className="px-4 p-2 bg-blue-500 rounded-md"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}
    </>
  );
}
