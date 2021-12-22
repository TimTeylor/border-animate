import "./styles.css";
import Card from "./components/UI/Card";
import Keyboard from "./components/UI/Keyboard";

export default function App() {
  return (
    <div className="App">
      <h1>Animated border</h1>
      <div className="card-list">
        <Card />
        <Card />
        <Card />
      </div>
      <h1>3D Keyboard keys</h1>
      <div className="keyboard-list">
        <Keyboard />
        <Keyboard />
        <Keyboard />
      </div>
    </div>
  );
}
