import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return (
    <div className='app'>
      <h1>Hello Vite</h1>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((el) => (
          <div className="todo">
            <div className="content">
              <p>{el.text}</p>
              <p className="category">
                ({el.category})
              </p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
