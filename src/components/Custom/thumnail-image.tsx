import React from 'react'

export const ThumNailImage = ({ src, alt }) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '334px',
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
          opacity: loaded ? 1 : 0, // 로드 전에는 투명
          transition: 'opacity 0.5s ease-in-out', // 서서히 나타나는 효과
          display: 'block',
        }}
        alt={alt}
        src={src}
        onLoad={() => setLoaded(true)} // 로드 후 상태 변경
        loading='eager'
      />
    </div>
  )
}
