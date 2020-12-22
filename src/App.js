import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">      
        {/* header */}
        <Header/>
        {/* tindercards */}
        <TinderCards/>
        {/* swipebtns */}
        <SwipeButtons/>

    </div>
  );
}

export default App;
