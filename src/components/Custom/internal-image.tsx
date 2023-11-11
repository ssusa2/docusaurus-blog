import React, { useEffect } from "react"

/**
 * 내부이미지 첨부시 사용하는 컴포넌트, 이미지 소개 글 있음
 */
export const Image = ({ url, title }) => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        src={`${url}`}
      />
      <p
        style={{
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  )
}
