import './App.css';
import 'font-awesome/css/font-awesome.css';

import { Board } from './components/Board';
import { Header } from './components/Header';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <div className="App">
      <Provider store={ store }>
        <Header/>
        <Board/>
      </Provider>
    </div>
  );
  
}

export default App;
