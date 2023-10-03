import React from "react"

/**
 * 글자 중앙처리 및 백그라운드 색상
 */
export const Center = ({ children }) => {
  console.log("Center", children)
  return (
    // <div style={{ color: "var(--ifm-color-primary) !important" }}>
    <div id='center-compontent'>{children}</div>
  )
}
