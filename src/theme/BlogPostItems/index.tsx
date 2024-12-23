import React from 'react'
import { BlogPostProvider } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme/BlogPostItem'
import type { Props } from '@theme/BlogPostItems'

function Date({
  date,
  formattedDate,
}: {
  date: string
  formattedDate: string
}) {
  return (
    <time dateTime={date} itemProp='datePublished'>
      {formattedDate}
    </time>
  )
}

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    <>
      {items?.map(({ content: BlogPostContent }, index) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <article>
            <div className='blog-list-item'>
              <div className='blog-list-img-wrap'>
                <LazyLoadImage
                  src={BlogPostContent.frontMatter.image}
                  alt={BlogPostContent.frontMatter.title}
                  slug={BlogPostContent.frontMatter.slug}
                  eager={index < 3} // 상위 3개는 eager 로딩
                />
              </div>
              <div className='blog-list-content'>
                <a
                  style={{
                    textDecoration: 'none',
                  }}
                  href={`/${BlogPostContent.frontMatter.slug}`}
                >
                  <h3 className='blog-list-content-title'>
                    {BlogPostContent.frontMatter.title}
                  </h3>
                </a>
                <a
                  style={{
                    textDecoration: 'none',
                  }}
                  href={`/${BlogPostContent.frontMatter.slug}`}
                >
                  <p className='blog-list-content-desc'>
                    {BlogPostContent.metadata.description}
                  </p>
                </a>
                <div>
                  <div className='blog-list-tag-list'>
                    {BlogPostContent.frontMatter.tags.map((el, i) => (
                      <a
                        className='blog-list-tag-item'
                        key={i}
                        href={`/tags/${el}`}
                      >
                        {`${el} `}
                      </a>
                    ))}
                  </div>

                  <div className='blog-list-date'>
                    <Date
                      date={BlogPostContent.metadata.date}
                      formattedDate={BlogPostContent.metadata.formattedDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </BlogPostProvider>
      ))}
    </>
  )
}

function LazyLoadImage({ src, alt, slug, eager }) {
  const [loaded, setLoaded] = React.useState(false)
  const imgRef = React.useRef(null)

  React.useEffect(() => {
    if (eager) {
      // eager 옵션일 경우 로드 시작
      setLoaded(true)
    } else {
      // lazy 로딩 처리
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoaded(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      if (imgRef.current) observer.observe(imgRef.current)
      return () => observer.disconnect()
    }
  }, [eager])

  return (
    <a href={`/${slug}`}>
      <img
        ref={imgRef}
        className={`blog-list-img ${loaded ? 'loaded' : ''}`}
        src={loaded ? src : ''}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        sizes='(max-width: 668px) 280px, 100vw'
        width='280'
        height='280'
        srcSet={`
          ${src}?w=280 280w,
          ${src}?w=560 560w,
          ${src}?w=840 840w
        `}
        style={{
          backgroundColor: '#f0f0f0',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out',
          opacity: loaded ? 1 : 0,
        }}
      />
    </a>
  )
}
