import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [response, setResponse] = useState({});
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    fetch(currentPage)
      .then((res) => res.json())
      .then((res) => setResponse(res));
  }, [currentPage]);

  return (
    <>
      {response.info ? (
        <Characters response={response} setCurrentPage={setCurrentPage} />
      ) : (
        "Carregando..." //sempre fazer o loading... assim garantimos que só vai haver o carregamento dos componentes quando tiver informações.
      )}
    </>
  );
}

export default App;
