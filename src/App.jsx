import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="Row">
        <Card title="Card 1" red>X</Card>
      </div>
      <div className="Row">
        <Card title="Card 2" blue>Y</Card>
      </div>
    </div>
  );
}

export default App;
