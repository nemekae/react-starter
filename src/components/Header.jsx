import reactLogo from '../assets/react-core.png';
import "./Header.css"


function genRandom(max){
  return Math.floor(Math.random() * (max + 1));
}
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
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
