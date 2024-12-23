import './App.css';
import MainComp from './components/MainComponent/MainComp';
import { Provider } from 'react-redux'; // ✅ Named import for Provider
import store from './slices/store';

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <MainComp />
    </div>
  </Provider>
  );
}

export default App;
