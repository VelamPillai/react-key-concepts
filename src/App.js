import concepts from "../src/assets/data/concepts.js";
import ConceptCard from './components/ConceptCard.js';
import TitleCard from './components/TitleCard.js';

function App() {
  return (
    <div>
      <header>
        <TitleCard />
      </header>
      <body>
      <ConceptCard concepts = {concepts} />
      </body>
      
    </div>
  );
}

export default App;
