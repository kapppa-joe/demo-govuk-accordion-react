import logo from './logo.svg';
import './App.css';
import './main.sass'
import Accordion from './accordion';

function App() {
  return (
    <div className="App">
      <h1 className="govuk-heading-l">Gov UK accordion in a react app</h1>
      <section className='govuk-width-container'>
        <Accordion />
      </section>
    </div>
  );
}

export default App;
