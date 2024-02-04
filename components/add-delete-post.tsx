"use client";

import { createPost, deletePost } from "@/app/actions";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export function AddButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-4 text-white font-bold bg-blue-500 rounded-md w-full"
    >
      {pending ? <>Adding...</> : <>Add Post</>}
    </button>
  );
}

export default function AddPost() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className="sticky w-full text-center top-0 bg-black shadow-2xl">
        <h1 className="text-3xl font-bold pt-10 md:text-4xl">
          Postgres CRUD APP
        </h1>
        <p className="text-white/30 pt-2 pb-10 text-center text-balance">
          No user login/signup, so deleting affects all users, also don't add
          billions of posts cause It will exceed my $5 database budget. Thanks!
        </p>
        <form
          className="flex flex-col gap-4 text-black w-full shadow-2xl"
          ref={formRef}
          action={async (formData) => {
            await createPost(formData);
            formRef.current?.reset();
          }}
        >
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
            className="border border-gray-300 rounded-md p-2 min-h-20"
          />{" "}
          <AddButton />
        </form>
      </div>{" "}
    </>
  );
}

export function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deletePost.bind(null, id)}>
      <DeleteButton />
    </form>
  );
}

export function DeleteButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 p-2 font-bold bg-red-500 rounded-md"
    >
      {pending ? <>Deleting...</> : <>Delete</>}
    </button>
  );
}
