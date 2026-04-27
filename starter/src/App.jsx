import { useState } from 'react'
import { Header } from './components/Header'
import { Concept } from './components/Concept'
import { TabButton } from './components/TabButton'
import { cdata } from './data'
import './App.css'


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Concept 
              image = { cdata[0].image }
              title = { cdata[0].title }
              description = { cdata[0].description }
            />
            <Concept {...cdata[1]} />
            <Concept {...cdata[2]} />
            <Concept {...cdata[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>

      </main>
    </div>
  )
}

export default App
