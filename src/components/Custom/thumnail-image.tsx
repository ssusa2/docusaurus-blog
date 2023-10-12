import React from "react"

/**
 * 썸네일 이미지 컴포넌트
 */
export const ThumNailImage = ({ src, alt }) => {
  return (
    <img
      style={{
        width: "100%",
      }}
      alt={`${alt}`}
      src={`${src}`}
      size='(max-width: 668px)'
      width='668'
      height='334'
      loading='eager'
    />
  )
}
