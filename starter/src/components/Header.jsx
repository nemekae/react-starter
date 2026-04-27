import reactLogo from '../assets/react-core.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
import "./Header.css"


function genRandom(max){
  return Math.floor(Math.random() * (max + 1));
}

const qualifier = reactDescriptions[genRandom(2)];

export const Header = () => {
  return (
    <header>
        <img src={reactLogo}/>
        <h1>React Essentials</h1>
        <p>
          {qualifier} React concepts you will need for almost any you are going to build!
        </p>
    </header>
  )
}
