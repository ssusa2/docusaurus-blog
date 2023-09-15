import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import { useBlogPost } from "@docusaurus/theme-common/internal"

export default function BlogPostPaginator(props) {
  const data = useBlogPost()
console.log( data)
  const {nextItem, prevItem} = props;
  console.log({nextItem, prevItem})
  const path = prevItem.permalink.split("/")[2]
  console.log(path)
  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.blog.post.paginator.navAriaLabel',
        message: 'Blog post page navigation',
        description: 'The ARIA label for the blog posts pagination',
      })}>
      {prevItem && (
        <PaginatorNavLink
          {...prevItem}
          subLabel={
            <Translate
              id="theme.blog.post.paginator.newerPost"
              description="The blog post button label to navigate to the newer/previous post">
              Newer Post
            </Translate>
          }
        />
      )}
      {/* <img src={`/img/${path}.png`}/>
      <h3>123</h3> */}
      {nextItem && (
        <PaginatorNavLink
          {...nextItem}
          subLabel={
            <Translate
              id="theme.blog.post.paginator.olderPost"
              description="The blog post button label to navigate to the older/next post">
              Older Post
            </Translate>
          }
          isNext
        />
      )}
    </nav>
  );
}
