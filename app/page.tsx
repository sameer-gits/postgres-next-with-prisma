import AddDeletePost from "@/components/add-delete-post";
import AllPosts from "@/components/all-posts";

export default async function Home() {
  return (
    <main className="flex p-8 flex-col items-center justify-center min-h-screen max-w-4xl mx-auto">
      <AddDeletePost />
      <AllPosts />
    </main>
  );
}
