import './App.css';
import Navbar from './components/navbar';
import Newexperience from './components/newexperience';
import Display from './components/display';
import Labels from './components/labels';
import Event from './components/event';

function App() {
  return(
    <div>
      <Navbar />
      <Display />
      <Newexperience />
      <Labels />
      <div style={{display:'flex'}}>
      <Event />
      <Event />
      </div>
      <div style={{height:'100px'  }}>
        .
      </div>
    </div>
  );
}




export default App;

