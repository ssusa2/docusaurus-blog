import { cvInfoType } from '@site/src/assets/cv-info'
import { type } from 'os'
import React, { Fragment } from 'react'

export interface ProjectProp extends cvInfoType {}

export const Project = (info: cvInfoType) => {
  const { name, description } = info
  return (
    <Fragment>
      <div
        style={{
          background: '#fffff3',
        }}
      >
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Fragment>
  )
}
