'use client'
import Titles from '@/Components/Titles'
import { blogPost } from '@/models/jsonData'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'

export default function Blogs() {

  const fadeInVariant = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  };

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full overflow-auto'>
        <Titles title={'Blogs'} />
        <div className='flex flex-wrap w-full p-4'>
          {
            blogPost.map((b, _index) => {
              return (
                <motion.div key={b._id}
                  className=' w-1/3 sm:w-full group hover:scale-105 transition duration-100 ease-in-out'
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariant}
                  transition={{ delay: 0.2 * _index, duration: 1 }}
                >
                  <Link
                    className="card p-2 shadow-xl"
                    href={`/blogs/${encodeURIComponent(b._id)}`} >
                    <figure>
                      <Image
                        src={b.imageSource}
                        alt="Shoes"
                        height={1600}
                        width={900}
                        className='w-full h-full border border-white border-b-0 rounded-t-2xl '
                      />
                    </figure>
                    <div className="card-body bg-[#ffffff05] rounded-b-2xl border border-white border-t-0">
                      <h2 className="card-title text-s">{b.title}</h2>
                      <p className='text-xs'>{b.fullDetails.slice(0, 50)}{b.fullDetails.length > 50 && '...'}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary hover:border-b-4 hover:border-r-4 transition-all duration-100 ease-in-out">Read</button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}
