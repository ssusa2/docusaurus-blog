import React from 'react'

export const ThumNailImage = ({ src, alt }) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '334px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}
    >
      <img
        style={{
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',

          display: 'block',
        }}
        alt={`${alt}`}
        src={`${src}?cacheBust=${Date.now()}`}
        srcSet={`
          ${src}?w=280 280w,
          ${src}?w=560 560w,
          ${src}?w=840 840w
        `}
        sizes='(max-width: 668px) 280px, 100vw'
        loading='eager'
      />
    </div>
  )
}
