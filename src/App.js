// import logo from './logo.svg';
import TinderCard from "./TinderCards";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCard />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
