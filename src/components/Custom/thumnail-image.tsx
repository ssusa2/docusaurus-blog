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
      {!loaded && (
        <div
          style={{
            backgroundColor: '#f0f0f0',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      <img
        style={{
          position: 'absolute', // 상단에 고정
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out',
          opacity: loaded ? 1 : 0,
          display: 'block',
        }}
        alt={`${alt}`}
        src={`${src}`}
        srcSet={`
          ${src}?w=280 280w,
          ${src}?w=560 560w,
          ${src}?w=840 840w
        `}
        sizes='(max-width: 668px) 280px, 100vw'
        onLoad={() => setLoaded(true)}
        loading='lazy'
      />
    </div>
  )
}
