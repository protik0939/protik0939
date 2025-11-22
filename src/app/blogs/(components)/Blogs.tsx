'use client'
import Titles from '@/app/(components)/Titles'
import { blogPost } from '@/models/jsonData'
import Image from 'next/image'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useLanguage } from '@/app/(components)/LanguageProvider'
import { IoMdSearch, IoMdClose, IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import { useSearchParams } from 'next/navigation'

export default function Blogs() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tagsScrollRef = useRef<HTMLDivElement>(null);

  // Check for tag parameter in URL
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
    }
  }, [searchParams]);

  const fadeInVariant = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  };

  const {t, toBengaliNumber} = useLanguage();

  const scrollTags = (direction: 'left' | 'right') => {
    if (tagsScrollRef.current) {
      const scrollAmount = 200;
      tagsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Get all unique tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPost.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter blogs based on search and selected tag
  const filteredBlogs = useMemo(() => {
    return blogPost.filter(blog => {
      const matchesSearch = searchQuery === '' || 
        t(blog.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(blog.fullDetails).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(blog.author).toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => t(`tag.${tag}`).toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = selectedTag === null || blog.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag, t]);

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full overflow-auto'>
        <Titles title={t('blogs')} />
        
        {/* Search Bar */}
        <div className='w-full px-4 pt-4 pb-2'>
          <div className='relative max-w-2xl mx-auto'>
            <IoMdSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl z-40' />
            <input
              type='text'
              placeholder={t('blogs.searchblogs') || 'Search blogs...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-12 py-3 bg-card/50 backdrop-blur-sm theme-rounded theme-border border-border focus:border-primary outline-none theme-transition text-foreground placeholder:text-muted-foreground'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground theme-transition'
              >
                <IoMdClose className='text-xl' />
              </button>
            )}
          </div>
        </div>

        {/* Tag Filters */}
        <div className='w-full px-4 pb-4'>
          <div className='max-w-5xl mx-auto relative'>
            {/* Left Arrow */}
            <button
              onClick={() => scrollTags('left')}
              className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm hover:bg-card theme-border border-border rounded-full p-2 theme-shadow theme-transition hover:scale-110'
              aria-label='Scroll left'
            >
              <IoMdArrowBack className='text-xl text-foreground' />
            </button>

            {/* Tags Container */}
            <div 
              ref={tagsScrollRef}
              className='flex gap-2 overflow-x-auto scrollbar-hide px-12 scroll-smooth'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium theme-transition whitespace-nowrap flex-shrink-0 ${
                  selectedTag === null
                    ? 'bg-primary text-primary-foreground theme-shadow'
                    : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground theme-border border-border'
                }`}
              >
                {t('ui.all') || 'All'}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium theme-transition whitespace-nowrap flex-shrink-0 ${
                    selectedTag === tag
                      ? 'bg-primary text-primary-foreground theme-shadow'
                      : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground theme-border border-border'
                  }`}
                >
                  {t(`tag.${tag}`)}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollTags('right')}
              className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm hover:bg-card theme-border border-border rounded-full p-2 theme-shadow theme-transition hover:scale-110'
              aria-label='Scroll right'
            >
              <IoMdArrowForward className='text-xl text-foreground' />
            </button>
          </div>
        </div>

        {/* Results count */}
        {(searchQuery || selectedTag) && (
          <div className='w-full px-4 pb-2'>
            <p className='text-center text-sm text-muted-foreground'>
              {toBengaliNumber(filteredBlogs.length)} {filteredBlogs.length === 1 ? t('blog') : t('blogs')} {t('blogs.found')}
            </p>
          </div>
        )}

        <div className='flex flex-wrap w-full p-4'>
          {
            filteredBlogs.map((b, _index) => {
              return (
                <motion.div key={b._id}
                  className=' w-1/3 sm:w-full group hover:scale-105 transition duration-100 ease-in-out'
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariant}
                  transition={{ delay: 0.2 * _index, duration: 1 }}
                >
                  <Link
                    className="card p-2 theme-shadow theme-transition"
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
                    <div className="card-body bg-card/30 backdrop-blur-sm rounded-b-xl border theme-border border-border !border-t-0">
                      <h2 className="card-title text-s text-primary">{t(b.title)}</h2>
                      <p className='text-xs text-muted-foreground'>{t(b.fullDetails).slice(0, 50)}{t(b.fullDetails).length > 50 && '...'}</p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-primary text-primary-foreground hover:bg-primary/90 theme-transition hover:theme-shadow">{t('blogs.read')}</button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })
          }
          {filteredBlogs.length === 0 && (
            <div className='w-full flex flex-col items-center justify-center py-20'>
              <p className='text-muted-foreground text-lg mb-2'>{t('blogs.noBlogsFound')}</p>
              <p className='text-sm text-muted-foreground'>{t('blogs.tryAdjustingSearchOrFilter')}</p>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}
