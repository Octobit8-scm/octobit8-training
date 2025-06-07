import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/data';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await getBlogPost(params.id);
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: any) {
  const post = await getBlogPost(params.id);
  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-lg mx-auto px-4 py-8">
      <h1>{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <p>By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
} 