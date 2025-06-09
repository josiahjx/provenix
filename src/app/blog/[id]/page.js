import BlogArticle from '@/app/components/BlogArticle';
import { defaultMetadata } from '@/app/metadata';

export async function generateMetadata({ params }) {
  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Cryptocurrency Recovery',
      description: 'Learn about the various methods and techniques used to recover lost or inaccessible digital assets.',
    },
    {
      id: '2',
      title: 'The Future of Digital Asset Security',
      description: 'Explore emerging trends in digital asset security and what they mean for investors.',
    },
    {
      id: '3',
      title: 'Navigating Cryptocurrency Regulations',
      description: 'An overview of current regulatory frameworks and compliance requirements in the crypto space.',
    },
    {
      id: '4',
      title: 'Blockchain Technology in Financial Services',
      description: 'Discover how blockchain is transforming the financial services industry.',
    },
    {
      id: '5',
      title: 'Cryptocurrency Investment Strategies',
      description: 'Key principles and approaches for successful cryptocurrency investing.',
    }
  ];

  const post = blogPosts.find(post => post.id === params.id);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['Trackz Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPage({ params }) {
  return <BlogArticle id={params.id} />;
} 