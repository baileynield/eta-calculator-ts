import "./App.css"
import Calculator from "./Calculator";

function App() {

  return (
    <>
      <header>
        <h1>ETA Calculator</h1>
        <p>Given distance to destination and speed, this app will return the time to destination</p>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  );
}

export default App
