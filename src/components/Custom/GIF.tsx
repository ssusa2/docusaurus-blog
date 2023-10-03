import React from "react"

/**
 * GIF 전용 컴포넌트
 */
export const GIF = ({ url, title }) => {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "3/1",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={`${url}`}
      />
      <div
        style={{
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {title}
      </div>
    </div>
  )
}
