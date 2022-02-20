import logo from './logo.svg';
import './App.css';
import Dashboard from './Screens/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='grid_class'>
        <div>
          {/* Sidebar here */}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
