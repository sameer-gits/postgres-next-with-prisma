"use client";

import { updatePost } from "@/app/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const edit = "Edit";

export function UpdateButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-4 font-bold text-white bg-blue-500 rounded-md"
    >
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
  // const [scroll, setScroll] = useState(false);
  // scroll
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");

  return (
    <>
      {isEditing ? (
        <>
          {" "}
          <div className="fixed w-full h-screen flex flex-col left-0 right-0 top-0 items-center justify-center backdrop-blur-md bg-black/60 px-4">
            <div className="w-full max-w-4xl p-8 bg-black/60 rounded-xl left border border-blue-900/70 shadow-2xl shadow-blue-900/70">
              <h1 className="text-xl text-center font-bold pb-4">Edit Post</h1>
              <form
                className="flex flex-col gap-3 text-black"
                action={async (formData) => {
                  await updatePost.bind(null, id)(formData);
                  setIsEditing(false);
                  // setScroll(false);
                }}
              >
                <label className="text-white font-bold">Title</label>
                <input
                  type="text"
                  id=""
                  name="title"
                  defaultValue={title}
                  placeholder="Title"
                  required
                  className="h-10 border border-gray-300 rounded-md p-2 w-full"
                />

                <label className="text-white font-bold">Content</label>
                <textarea
                  name="content"
                  defaultValue={content ?? ""}
                  typeof="text"
                  placeholder="Content"
                  className="border border-gray-300 rounded-md p-2 min-h-32 mb-2"
                />
                <UpdateButton />
                <button
                  className="p-4 font-bold text-white bg-blue-500 rounded-md w-full"
                  onClick={() => {
                    setIsEditing(false);
                    // setScroll(false);
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>{" "}
          <button
            className="px-4 p-2 font-bold bg-blue-500 rounded-md w-full"
            onClick={() => {
              setIsEditing(true);
              // setScroll(true);
            }}
          >
            {edit}
          </button>
        </>
      ) : (
        <button
          className="px-4 p-2 font-bold bg-blue-500 rounded-md"
          onClick={() => {
            setIsEditing(true);
            // setScroll(true);
          }}
        >
          {edit}
        </button>
      )}
    </>
  );
}
