import { blogPost } from '@/models/jsonData';
import { en } from '@/app/(components)/Translations/en';
import type { Metadata } from 'next';
import BlogContent from './BlogContent';

type Params = { _id: string };

export async function generateMetadata(
    { params }: { params: Promise<Params> }
): Promise<Metadata> {
    const { _id } = await params;
    const post = blogPost.find(e => e._id === _id);

    if (!post) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    // Get translations
    const titleKey = post.title as keyof typeof en;
    const title = en[titleKey] || 'Blog Post';
    
    const authorTransKey = post.author as keyof typeof en;
    const authorKey = en[authorTransKey] || 'Author';
    
    // Get description from fullDetails (first 160 characters for SEO)
    const fullDetailsKey = post.fullDetails as keyof typeof en;
    const fullDetails = en[fullDetailsKey] || '';
    const description = fullDetails.slice(0, 160).replaceAll('\n', ' ') + (fullDetails.length > 160 ? '...' : '');

    // Get image URL (always use index 0 as specified)
    const imageUrl = post.imageSource[0];
    
    // Check if it's a YouTube URL
    const isYouTubeUrl = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');
    
    // For YouTube videos, extract thumbnail
    let ogImage = imageUrl;
    if (isYouTubeUrl(imageUrl)) {
        const videoIdPattern = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const videoIdMatch = videoIdPattern.exec(imageUrl);
        if (videoIdMatch) {
            ogImage = `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;
        }
    }

    return {
        title,
        description,
        keywords: post.tags.map(tag => {
            const tagKey = `tag.${tag}` as keyof typeof en;
            return en[tagKey] || tag;
        }).join(', '),
        authors: [{ name: authorKey }],
        openGraph: {
            title: title,
            description: description,
            type: 'article',
            publishedTime: post.uploadTime,
            authors: [authorKey],
            tags: post.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [ogImage],
        },
    };
}

export default async function Page(props: Readonly<{ params: Promise<Params> }>) {
    const params = await props.params;
    return <BlogContent _id={params._id} />;
}
