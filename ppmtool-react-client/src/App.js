import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;