import { defaultMetadata } from './metadata';

export default function sitemap() {
  const baseUrl = defaultMetadata.metadataBase.toString();
  
  const routes = [
    '',
    '/services',
    '/about',
    '/blog',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Add blog posts to sitemap
  const blogPosts = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ].map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...blogPosts];
} 