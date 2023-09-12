
function ConceptCard({concepts}) {
  return (
    <div>
          <ul id="concepts">
              {
                  concepts.map((item, idx) => {
                      return (
                        <li className="concept" key={idx}>
                          <img src={item.image} alt="pic-concepts" />
                              <h2>{ item.title}</h2>
                              <p>{ item.description}</p>
                        </li>
                      );
                  }
                      
                  )
              }
        
      </ul>
    </div>
  );
}
export default ConceptCard