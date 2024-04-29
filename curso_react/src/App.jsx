import './App.css'
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  let name = 'Gleidson'
  let age = '28'
  let role = 'Programador'
  return (
    <>
      <HelloWorld/>
      <SayMyName name='Gleidson'/>
      <Pessoa name={name} age={age} role={role}/>
    </>
  )
}

export default App
