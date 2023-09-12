
function ConceptCard({concepts}) {
  return (
    <div>
          <ul id="concepts">
              {
                  concepts.map((item, idx) => {
                      return (
                        <li className="concept">
                          <img src={item.image} alt="TODO: TITLE" />
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