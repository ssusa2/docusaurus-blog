import React from 'react'
import Layout from '@theme/Layout'
import { cvInfoList } from '../assets/cv-info'
import { AboutMe } from '../components/Resume/about-me'
import { Description } from '../components/Resume/description'
import { Project } from '../components/Resume/project'

export default function Hello() {
  const h = 5
  const w = 5

  return (
    <Layout title='Hello' description='Hello React Page'>
      <section
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          background: '#f2f2f2',
          padding: '4rem 8rem',
        }}
      >
        <div
          className='wrap'
          style={{
            maxWidth: '760px',
            width: '100%',
            background: 'white',
            borderRadius: 12,
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(auto-fill, minmax(100px, auto))',
            gap: '20px',
            padding: 20,
          }}
        >
          <AboutMe />
          <Description />
          {/* {Array(h * w)
            .fill()
            .map((arr, i) => {
              // (arr: 현재값, i:인덱스)
              return (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: (i + 1) % 2 === 0 ? '#d5bdbd' : '#d4cccc',
                    borderRadius: 8,
                  }}
                >
                  {i}
                </div>
              )
            })} */}
          {cvInfoList.map((project, index) => {
            return <Project key={index} {...project} />
          })}
        </div>
      </section>
    </Layout>
  )
}
// <div
//   style={{
//     position: 'relative',
//     width: '100%',
//     height: '100%',
//     background: '#e7e7e7',
//     borderRadius: 8,
//   }}
// >
//   {project.name}
//   {project.description}
// </div>
