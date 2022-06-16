import './App.css';
import Counter from './component/Counter';
import Jokes from './component/Jokes/Jokes';
import Profile from './component/Profile/Profile';
import QuestrionMap from './component/questrionMap'

function App() {
  return (
    <div className="App">
  <Counter/>
    <QuestrionMap/>
    <Profile/>
    <Jokes/>
    </div>
  );
}

export default App;
