'use client'
import { useLanguage } from '@/app/(components)/LanguageProvider';
import { blogPost } from '@/models/jsonData';
import { TBlogPost } from '@/models/typeScript';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { IoMdArrowRoundBack, IoMdShare, IoMdPricetag } from 'react-icons/io';
import { useRouter } from 'next/navigation';

type Params = { _id: string };

export default function Page(props: Readonly<{ params: Promise<Params> }>) {
    const params = use(props.params);
    const _id = params._id;
    const {t, language} = useLanguage();
    const router = useRouter();
    const x: TBlogPost | undefined = blogPost.find(e => e._id === _id);

    const handleShare = async () => {
        if (navigator.share && x) {
            try {
                await navigator.share({
                    title: t(x.title),
                    text: `${t(x.title)} - ${t(x.author)}`,
                    url: globalThis.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        }
    };

    const handleTagClick = (tag: string) => {
        router.push(`/blogs?tag=${encodeURIComponent(tag)}`);
    };

    if (!x) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p>Blog post not found</p>
            </div>
        );
    }

    return (
        <div className='w-full h-screen overflow-hidden p-2 flex sm:flex-col'>

            <div className='w-1/2 sm:w-full h-full sm:h-auto sm:pt-20 flex justify-center items-center bgg:rounded-l-lg sm:rounded-t-lg theme-border border-border bgg:border-r-0 sm:border-b-0 bg-card/30 p-2 sm:p-0 backdrop-blur-sm theme-transition'>
                <Image
                    src={x.imageSource}
                    alt=''
                    width={1600}
                    height={900}
                    className='w-full theme-rounded theme-shadow'
                />
            </div>

            <div className='w-1/2 sm:w-full h-full sm:h-auto overflow-hidden sm:overflow-auto bgg:rounded-r-lg sm:rounded-b-lg theme-border border-border bgg:border-l-0 sm:border-t-0 bg-card/30 p-2 backdrop-blur-sm theme-transition'>
                <div className='w-full theme-card h-full sm:h-auto overflow-hidden'>
                    <div className='w-full h-full bgg:overflow-auto flex pb-20 p-5 items-center flex-col py-8'>
                        <div className='text-2xl font-bold text-primary mb-2'>{t(x.title)}</div>
                        <div className='text-xs mt-5 text-muted-foreground'>{t('blogs.writtenby')}: <span className='text-accent font-semibold'>{t(x.author)}</span></div>
                        <div className='text-xs text-muted-foreground'>{t('blogs.uploadedon')}: {new Date(x.uploadTime).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })} {t('ui.at')} {new Date(x.uploadTime).toLocaleTimeString(language === 'bn' ? 'bn-BD' : 'en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                        <div className='text-xs mb-5 text-muted-foreground'>{t('blogs.timetoread')}: {t(x.timeToRead)}</div>
                        
                        <button 
                            onClick={handleShare}
                            className='mb-10 flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary theme-rounded theme-border border-border theme-transition hover:theme-shadow'
                        >
                            <IoMdShare className='text-lg' />
                            <span className='text-sm font-medium'>Share</span>
                        </button>

                        <div 
                            className='text-foreground leading-relaxed' 
                            style={{ whiteSpace: "pre-line" }}
                            dangerouslySetInnerHTML={{ __html: t(x.fullDetails) }}
                        />

                        {/* Tags Section */}
                        <div className='w-full mt-8 pt-6 border-t border-border'>
                            <div className='flex items-center gap-2 mb-3'>
                                <IoMdPricetag className='text-primary text-lg' />
                                <h3 className='text-sm font-semibold text-foreground'>{t('ui.tags')}</h3>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {x.tags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => handleTagClick(tag)}
                                        className='px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium rounded-full theme-border border-primary/20 theme-transition hover:theme-shadow hover:scale-105'
                                    >
                                        {t(`tag.${tag}`)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={'/blogs'}>
                <div className='absolute top-5 left-5 bg-card/80 backdrop-blur-md theme-rounded p-2 px-4 flex items-center justify-center theme-border border-border group hover:scale-110 theme-transition hover:theme-shadow z-50'>
                    <IoMdArrowRoundBack className='text-primary' />
                    <h1 className='ml-2 group-hover:ml-4 theme-transition text-foreground'>All Posts</h1>
                </div>
            </Link>
        </div>
    );
}
