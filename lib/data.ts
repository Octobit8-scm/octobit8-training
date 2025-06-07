import { BlogPost } from './types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    content: '<p>Next.js is a powerful framework for building React applications...</p>',
    author: 'John Doe',
    date: '2024-03-15',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Explore advanced TypeScript patterns for better code organization',
    content: '<p>TypeScript provides powerful features for type safety...</p>',
    author: 'Jane Smith',
    date: '2024-03-16',
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.id === id);
} 