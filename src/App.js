import Navbar from './components/Navbar';
import Card from './components/Card';
import './css/App.css';
import data from './data/Data.js';

function App() {
  const elements = data.map((props)=>{return <div key={props.id}><Card item={props}/><hr/></div>});
  return (
    <div className="App">
      <Navbar/>
      <section className='section'>
        {elements}
        {elements}
        {elements}
        {elements}
      </section>
    </div>
  );
}

export default App;
