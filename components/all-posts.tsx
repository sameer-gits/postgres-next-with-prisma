import prisma from "@/lib/prisma";

// All Post Map

export default async function Posts() {
  const posts = await prisma.post.findMany();

  return (
    <div className="grid gap-4 mt-8 w-full">
      {posts
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((post) => (
          <div
            key={post.id}
            className="p-8 flex flex-col gap-8 bg-gray-800 rounded-md items-start"
          >
            <div className="w-full gap-4 flex-col flex">
              <h2 className="text-2xl font-bold break-all">{post.title}</h2>
              <p className="text-gray-500 break-all">{post.content}</p>
            </div>
            <div className="flex gap-4 justify-end items-start">
              {/* <DeleteButton id={post.id} />
              <FormUpdatePost
                id={post.id}
                title={post.title}
                content={post.content}
              /> */}
            </div>
          </div>
        ))}
    </div>
  );
}

// All Post Map
