import Bio from '@/components/Bio.js';
import PostItem from '@/components/PostItem.js';
import { getAllPosts } from '@/lib/api';
export default function Home() {
  const posts = getAllPosts(['title', 'slug', 'date', 'excerpt']);

  const data = posts.map((item) => {
    return { author: '오모세', ...item };
  });
  return (
    <main className="px-5 flex flex-col gap-3 max-w-4xl">
      <Bio />
      <div>
        <h2 className="border-b border-slate-300 py-3 font-bold text-lg">
          Latest posts
        </h2>
        {data.map((item, index) => {
          return <PostItem {...item} key={index} />;
        })}
      </div>
    </main>
  );
}
