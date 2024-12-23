import React from 'react'

/**
 * 글자 중앙처리 및 백그라운드 색상
 */
export const Center = ({ children, align = 'center' }) => {
  return (
    // <div style={{ color: "var(--ifm-color-primary) !important" }}>
    <div
      id='center-compontent'
      style={{
        textAlign: align, // align prop에 따라 정렬 설정
      }}
    >
      {children}
    </div>
  )
}
