import './App.css';
import Sidebar from './components/sidebar/sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <Switch>
        <Route exact path="/dashboard"
        >
          <Dashboard/>
        </Route>
      </Switch>
      <Sidebar />
    </div>
  );
}

export default App;
