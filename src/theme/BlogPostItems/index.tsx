import React from "react"
import { BlogPostProvider } from "@docusaurus/theme-common/internal"
import BlogPostItem from "@theme/BlogPostItem"
import type { Props } from "@theme/BlogPostItems"

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  console.log("BlogPostItems", items)
  return (
    <>
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <article className='blog-list-item'>
            <a
              className='blog-list-item'
              href={`/blog/${BlogPostContent.frontMatter.slug}`}
            >
              <div className='blog-list-img-wrap'>
                <img
                  className='blog-list-img'
                  src={`${BlogPostContent.frontMatter.image}`}
                />
              </div>
              <div className='blog-list-content'>
                <h3 className='blog-list-content-title'>
                  {BlogPostContent.frontMatter.title}
                </h3>
                <p className='blog-list-content-desc'>
                  {BlogPostContent.metadata.description}
                </p>
                <div className='blog-list-tag-list'>
                  {BlogPostContent.frontMatter.tags.map((el, i) => {
                    console.log("tag", el)
                    return (
                      <a
                        className='blog-list-tag-item'
                        key={i}
                        href={`/blog/tags/${el}`}
                      >
                        {`${el} `}
                      </a>
                    )
                  })}
                </div>
              </div>
            </a>
          </article>
        </BlogPostProvider>
      ))}
    </>
  )
}
