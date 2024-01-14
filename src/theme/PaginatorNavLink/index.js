import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props
  // console.log({permalink, title, subLabel, isNext})
  const path = permalink
  console.log('path', path)
  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
      )}
      to={permalink}
    >
      {/* <div className="pagination-nav__label">{title}</div> */}
      <img src={`/img${path}.png`} />
      {subLabel && <div className='pagination-nav__sublabel'>{title}</div>}
    </Link>
  )
}
