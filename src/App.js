import './App.css';
import ListSeafoodComponent from './components/ListSeafoodComponent';
import HeaderComponet from './components/HeaderComponent';
import FooterComponet from './components/FooterComponent';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import AddComponent from './components/AddComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponet />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<ListSeafoodComponent />}
            />

            <Route
              path="/seafoods"
              element={<ListSeafoodComponent />}
            />
            <Route 
              path='/add-seafood'
              element={<AddComponent/>}
            />
          </Routes>
        </div>
        <FooterComponet />
      </Router>
    </div>
  );
}

export default App;