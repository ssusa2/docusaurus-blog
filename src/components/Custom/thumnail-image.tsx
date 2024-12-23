import React from 'react'

export const ThumNailImage = ({ src, alt }) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div style={{ position: 'relative', width: '100%', height: '334px' }}>
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
          objectFit: 'cover',
          display: loaded ? 'block' : 'none',
        }}
        alt={`${alt}`}
        src={`${src}`}
        onLoad={() => setLoaded(true)}
        loading='lazy'
      />
    </div>
  )
}
