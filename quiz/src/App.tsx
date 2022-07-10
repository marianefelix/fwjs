import './App.css';
import { TabView } from './components/Tab/View';
import { TabForm } from './components/Tab/Form';
import { TabContextProvider } from './contexts/TabContext';

function App() {
  return (
    <TabContextProvider>
      <div className="App">
        <TabForm />
        <TabView />
      </div>
    </TabContextProvider>
  );
}

export default App;
