import './App.css';
import { CustomButton } from './components/CustomButton';
import { DescriptionContainer } from './components/DescriptionContainer';
import { Enunciation } from './components/Enunciation';

function App() {
  return (
    <div className="App">
      <CustomButton title="Tab 1" onClick={() => {}} />
      <DescriptionContainer>
        <Enunciation text="Texto teste" />
      </DescriptionContainer>
    </div>
  );
}

export default App;
