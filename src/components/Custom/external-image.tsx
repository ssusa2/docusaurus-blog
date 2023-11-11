import React from "react"

/**
 * 외부이미지 첨부시 사용하는 컴포넌트
 * @param url: 실제 외부이미지 주소
 * @param title: 이미지 글
 * @param link: 이미지 출처글
 * @returns
 */
export const EImage = ({ url, title, link }) => {
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
        <a href={link} target='#'>
          {title}
        </a>
      </p>
    </div>
  )
}
