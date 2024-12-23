import React from 'react'

/**
 * 글자 중앙처리 및 백그라운드 색상
 */
export const Highlight = ({ children, t = 'black', bg = '#f2f2f2' }) => {
  return (
    // <div style={{ color: "var(--ifm-color-primary) !important" }}>
    <span
      id='highlight'
      style={{
        color: t,
        backgroundColor: bg, // align prop에 따라 정렬 설정
        fontWeight: '700',
        padding: '2px 4px',
        borderRadius: 6,
      }}
    >
      {children}
    </span>
  )
}
