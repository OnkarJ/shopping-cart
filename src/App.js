import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <IntlProvider locale='en'>
          <Routes />
        </IntlProvider>
      </Router>
    </div>
  );
}

export default App;
