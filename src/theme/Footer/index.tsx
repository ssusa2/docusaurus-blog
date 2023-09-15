import React from "react"
import Footer from "@theme-original/Footer"
import type FooterType from "@theme/Footer"
import type { WrapperProps } from "@docusaurus/types"

type Props = WrapperProps<typeof FooterType>

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      {/* <section>
        <h2>Extra section</h2>
        <p>This is an extra section that appears above the original footer</p>
      </section> */}
      <Footer {...props} />
    </>
  )
}
