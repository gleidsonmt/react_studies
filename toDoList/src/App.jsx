import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

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

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredList = newTodos.filter((el) => el.id !== id ? el : null);
    setTodos(filteredList);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((el) => el.id === id ? el.isCompleted = !el.isCompleted: el);
    setTodos(newTodos);
  }

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  console.log("sort " + sort)
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {
        todos
        .filter( (todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted: !todo.isCompleted)
        .filter( (el) => el.text.toLowerCase().includes(search.toLowerCase()))
        .sort( (a, b) => sort === "Asc" ? String(a.text).localeCompare(b.text) : String(b).localeCompare(a.text) )
        .map((el) => (
          <Todo key={el.id} todo={el} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))
        }
        <TodoForm addTodo={ addTodo }/>
      </div>
    </div>
  )
}

export default App
