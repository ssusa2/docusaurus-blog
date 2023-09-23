import React from 'react';
import Link from '@docusaurus/Link';
import LinkIcon from "../../../static/img/icon/link.svg"
export default function MDXA(props) {
  return (<div>
  {/* <LinkIcon style={{
    marginRight:4
  }}/> */}
  <Link {...props}  
   style={{
    textDecoration:"underline",
    fontWeight:600,
  }}
  /></div>
  )
}
