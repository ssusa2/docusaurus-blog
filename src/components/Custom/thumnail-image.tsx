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
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out', // 부드러운 전환
          opacity: loaded ? 1 : 0, // 로드되기 전 투명
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
        loading='lazy' // lazy 로드
      />
    </div>
  )
}
