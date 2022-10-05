import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ViewAllUsers from './components/ViewAllUsers';
import ViewUser from './components/ViewUser';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ViewAllUsers />} />
          <Route path='/:id' element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
