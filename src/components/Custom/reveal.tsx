import Reveal from "reveal.js"
import React from "react"
// import "reveal.js/css/reveal.css"
// import "reveal.js/css/theme/white.css"
// import "node_modules/reveal.js/dist/reveal.css"
import "../../css/white.css"
import "../../css/black.css"
import "../../css/reveal.css"

/**
 * 글자 중앙처리 및 백그라운드 색상
 */
export const RevealTest = ({ children }) => {
  React.useEffect(() => {
    Reveal.initialize()
  }, [])

  return (
    <div className='reveal'>
      <div className='slides'>
        <section data-auto-animate>
          <pre data-id='code-animation'>
            <code data-trim data-line-numbers>
              let planets = [ name: 'mars', diameter: 6779 , name: 'earth',
              diameter: 12742 , name: 'jupiter', diameter: 139820 ]
            </code>
          </pre>
        </section>
        <section data-auto-animate>
          <pre data-id='code-animation'>
            <code data-line-numbers>
              const planets = [ name:"string", id: "number" ];
            </code>
          </pre>
        </section>
        <section data-auto-animate>
          <h1>Implicit</h1>
        </section>
        <section data-auto-animate>
          <h1>Implicit</h1>
          <h1>Animation</h1>
        </section>
        <section data-auto-animate>
          <div
            data-id='box'
            style={{ height: "50px", background: "salmon" }}
          ></div>
        </section>
        <section data-auto-animate>
          <div
            data-id='box'
            style={{ height: "200px", background: "blue" }}
          ></div>
        </section>
        <section data-auto-animate>
          <ul>
            <li>Mercury</li>
            <li>Jupiter</li>
            <li>Mars</li>
          </ul>
        </section>
        <section data-auto-animate>
          <ul>
            <li>Mercury</li>
            <li>Earth</li>
            <li>Jupiter</li>
            <li>Saturn</li>
            <li>Mars</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
