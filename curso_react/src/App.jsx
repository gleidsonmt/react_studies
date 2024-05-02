import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Testndo Eventos</h1>
      <Evento numero={2}></Evento>
      <Form />
    </div>
  );
}

export default App;
