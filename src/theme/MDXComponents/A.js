import React from 'react';
import Link from '@docusaurus/Link';
import LinkIcon from "../../../static/img/icon/link.svg"
export default function MDXA(props) {
  return   <Link {...props}  
   style={{
    textDecoration:"underline",
    fontWeight:600,
  }}
  />
}
