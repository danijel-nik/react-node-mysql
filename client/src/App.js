import './App.css';
import Layout from './components/Layout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home'

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Route path="/" component={Home} exact />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
