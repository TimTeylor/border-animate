import "./styles.css";
import Card from "./components/UI/Card";

export default function App() {
  return (
    <div className="App">
      <h1>Animated border</h1>
      <div className="card-list">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
