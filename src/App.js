import keyConceptsImage from './assets/images/key-concepts.png';
import concepts from "../src/assets/data/concepts.js";
import ConceptCard from './components/ConceptCard.js';

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ConceptCard concepts = {concepts} />
      
    </div>
  );
}

export default App;
