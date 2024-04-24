import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

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

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Hello Vite</h1>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((el) => (
          <Todo key={el.id} todo={el}/>
        ))}
        <TodoForm addTodo={ addTodo }/>
      </div>
    </div>
  )
}

export default App
