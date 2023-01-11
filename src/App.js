import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { UseStateExample,UseEffectExample,UseContextExample, UseReducerExample } from "./hooks-examples";

function App() {
	return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/use-state" element={<UseStateExample/>}/>
        <Route path="/use-effect"
        element={<UseEffectExample/>}/>
        <Route path="/use-context"
        element={<UseContextExample/>}/>
        <Route path="/use-reducer"
        element={<UseReducerExample/>}/>
      </Routes>
    </div>
  );
}

export default App;
