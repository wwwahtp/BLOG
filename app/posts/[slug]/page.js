import { getPostBySlug } from '@/lib/api';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Code } from 'bright';
import markdownStyles from './markdown-styles.module.css';

export default function Post(props) {
  const slug = props.params.slug;
  const { title, date, content } = getPostBySlug(slug, [
    'title',
    'date',
    'content',
    'cover',
  ]);

  return (
    <div className="max-w-4xl w-full">
      <div className="flex flex-col gap-5 w-full p-5 border-b border-slate-200">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="flex gap-5">
          <p className="font-bold">Moses O </p>
          <p className="text-slate-500">{date}</p>
        </div>
      </div>
      <main
        className={`${markdownStyles['markdown']} w-full border-b border-slate-200 pb-10`}
      >
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm], format: 'md' } }}
          components={{
            pre: (props) => <Code them="github-dark" lineNumbers {...props} />,
          }}
        />
      </main>
    </div>
  );
}
