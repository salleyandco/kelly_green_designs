import { getMDXData } from '@/helpers/mdx';
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { Url } from 'next/dist/shared/lib/router/router';
import path from 'path';

export type Project = {
  title: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  featured_image: Url;
  visibility: 'draft' | 'public' | 'private';
  published_at: Timestamp;
  location: string;
  content: string;
  images: Url[] | string[];
  slug?: string;
  photo_credit?: string;
};

export function getProjects(): Project[] {
  return getMDXData(path.join(process.cwd(), 'src', 'data', 'projects'))
    .filter((post) => post.visibility === 'public')
    .sort((a, b) => {
      if (!a.published_at || !b.published_at) return 0;

      return (
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
    });
}
