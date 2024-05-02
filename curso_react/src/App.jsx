import './App.css'
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
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
      <Pessoa name={name} age={age} role={role} avatar='https://gleidsonmt.github.io/img/man.jpg'/>
      <Frase></Frase>
      <List></List>
    </>
  )
}

export default App
