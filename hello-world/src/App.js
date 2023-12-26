import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
    <Counter />
    {/* <Message /> */}
{/* <Greet name="mum" heroName="Batman" >
  <p>This is children</p>
</Greet>
<Greet name="dad" heroName="Catman">
  <button>Action</button>
</Greet> 
<Greet name="sis"heroName="Wonderwoman" > 
<p>Heyy Sis!</p></Greet> 

<Welcome   name="mum" heroName="Batman"> 
<p>This is children</p></Welcome>
<Welcome   name="dad" heroName="Catman">  
<button>Action</button>
</Welcome>
<Welcome   name="sis"heroName="Wonderwoman">  
<p>Heyy Sis!</p> </Welcome> */}
{/* <Hello /> */}
    </div>
  );
}

export default App;
