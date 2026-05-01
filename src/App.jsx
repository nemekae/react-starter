import { useState } from 'react'
import { Header } from './components/Header'
import { Concept } from './components/Concept'
import { TabButton } from './components/TabButton'
import { data } from './data'
import { examples } from './data'
import './App.css'


function App() {
  const [topic, setTopic] = useState('components');

  const handleSelect= (choiceButton) => {
    setTopic(choiceButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {data.map((item) => <Concept key={item.title} {...item} />)}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={topic === 'components'} 
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={topic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={topic === 'props'} 
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
             <TabButton 
              isSelected={topic === 'state'} 
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {!topic && <p>Please select a topic</p>}
          {topic && (
            <div id="tab-content">
            <h3>{examples[topic].title}</h3>
            <p>{examples[topic].description}</p>
            <pre>
              <code>{examples[topic].code}</code>
            </pre>
          </div>
          )}
          
        </section>
      </main>
    </div>
  )
}

export default App
