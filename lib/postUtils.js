import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDir = path.join(process.cwd(), 'data', 'blog');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace('.mdx', '');
  const filePath = path.join(dataDir, `${postSlug}.mdx`);
  const fileData = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileData);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const allPosts = fs.readdirSync(dataDir);

  const processedPosts = allPosts.map((post) => getPostData(post));

  const sortedPosts = processedPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
