import { Key } from 'react';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
} 

export interface Blog{
    id: Key | null | undefined;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}
