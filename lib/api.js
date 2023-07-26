import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const base = join(process.cwd(), '_posts');

const getPostSlugs = () => {
  return fs.readdirSync(base);
};

function firstTwoLines(file) {
  file.excerpt = file.content
    .split('\n')
    .slice(0, 4)
    .filter((item) => item[0] !== '>' && item && item.length > 0)
    .join(' ');
}

export const getPostBySlug = (slug, fields) => {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(base, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content, excerpt } = matter(fileContents, {
      excerpt: firstTwoLines,
    });
    const items = {};

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }
      if (field === 'excerpt') {
        items[field] = excerpt;
      }

      if (typeof data[field] !== 'undefined') {
        if (field === 'date') {
          const date = new Date(data[field]);
          items[field] = `${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월 ${date.getDate()}일`;
          items.sortDate = date.toJSON();
        } else items[field] = data[field];
      }
    });
    return items;
  } catch (error) {
    console.error(error);
    return { title: '', date: '', content: '', cover: '', excerpt: '' };
  }
};

const sortByDate = (a, b) => {
  return a.sortDate > b.sortDate ? -1 : 1; // sort posts by date in descending order
};

export const getAllPosts = (fields) => {
  const slugs = getPostSlugs();
  const posts = [];
  slugs.forEach((slug) => {
    const post = slug && getPostBySlug(slug, fields);
    posts.push(post);
  });
  return posts.sort(sortByDate);
};
