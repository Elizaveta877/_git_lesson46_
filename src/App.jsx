
import { useSelector } from "react-redux";
import ComponentA from "./components/ComponentA";
import "./App.css"; 

function App() {
  const theme = useSelector((state) => state.app.theme);

  return (
    
    <div className={`page-wrapper ${theme}`}>
      

      <div className="main-card">
        <h1 className="title">Redux Demo</h1>
        
        <div className="content-area">
          <ComponentA />
        </div>
        
        <div className="status-bar">
          Тема: <span className="theme-badge">{theme}</span>
        </div>
      </div>

    </div>
  );
}

export default App;
