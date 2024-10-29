import { blogPost } from '@/models/jsonData';
import { TBlogPost } from '@/models/typeScript';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

type Params = { _id: string };

export async function generateMetadata(props: Readonly<{ params: Promise<Params> }>) {
    const params = await props.params;
    const _id = params._id;
    const x: TBlogPost | undefined = blogPost.find(e => e._id === _id);

    return {
        title: `${x?.title}`,
        description: x?.fullDetails,
    };
}

export default async function Page(props: Readonly<{ params: Promise<Params> }>) {
    const params = await props.params;
    const _id = params._id;
    const x: TBlogPost | undefined = blogPost.find(e => e._id === _id);

    if (!x) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p>Blog post not found</p>
            </div>
        );
    }

    return (
        <div className='w-full h-screen overflow-hidden p-2 flex sm:flex-col'>

            <div className='w-1/2 sm:w-full h-full sm:h-auto flex justify-center items-center bgg:rounded-l-lg sm:rounded-t-lg border bgg:border-r-0 sm:border-b-0 bg-slate-400/5 p-2 sm:p-0 backdrop-blur-sm'>
                <Image
                    src={x.imageSource}
                    alt=''
                    width={1600}
                    height={900}
                    className='w-full rounded-lg'
                />
            </div>

            <div className='w-1/2 sm:w-full h-full sm:h-auto overflow-hidden sm:overflow-auto bgg:rounded-r-lg sm:rounded-b-lg border bgg:border-l-0 sm:border-t-0 bg-slate-400/5 p-2 backdrop-blur-sm'>
                <div className='w-full h-full sm:h-auto overflow-hidden'>
                    <div className='w-full h-full bgg:overflow-auto flex items-center flex-col py-8'>
                        <div className='text-2xl'>{x.title}</div>
                        <div className='text-xs mt-5'>Written by: {x.author}</div>
                        <div className='text-xs'>Uploaded on: {x.uploadTime}</div>
                        <div className='text-xs mb-10'>Time to read: {x.timeToRead}</div>
                        <div style={{ whiteSpace: "pre-line" }}>{x.fullDetails}</div>
                    </div>
                </div>
            </div>
            <Link href={'/blogs'}>
                <div className='absolute top-5 left-5 bg-black/60 rounded-md backdrop-blur-md p-2 px-4 flex items-center justify-center border group hover:scale-110 transition-all duration-100 ease-in-out'>
                    <IoMdArrowRoundBack />
                    <h1 className='ml-2 group-hover:ml-4 transition-all duration-100 ease-in-out'>All Posts</h1>
                </div>
            </Link>
        </div>
    );
}
