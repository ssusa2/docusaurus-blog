import React from "react"

/**
 * Q 질문 컴포넌트
 */
export const Q = ({ children }) => {
  console.log("Center", children)
  return <h3>{children}</h3>
}
