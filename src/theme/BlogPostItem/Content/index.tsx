import React from "react"
import clsx from "clsx"
import { blogPostContainerID } from "@docusaurus/utils-common"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import MDXContent from "@theme/MDXContent"
import type { Props } from "@theme/BlogPostItem/Content"

export default function BlogPostItemContent({
  children,
  className,
}: Props): JSX.Element {
  const { isBlogPostPage } = useBlogPost()

  const isReady =
    children?.type.frontMatter.tags.at(-1) == "Ready" ? true : false
  console.log("isReady", isReady)
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
      itemProp='articleBody'
    >
      <MDXContent>{children}</MDXContent>
      {isReady ? (
        <div>
          <hr />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>글을 작성하고 있어요.</h2>
            <img src='/img/ready.png' alt='준비중' />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
