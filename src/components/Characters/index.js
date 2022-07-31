import Title from "../Title";
import Container from "../Container";
import CharCard from "../CharCard";
import ButtonsContainer from "../ButtonsContainer";

function Characters({ response, setCurrentPage }) {
  return (
    <>
      <Title>Meus Personagens</Title>
      <Container>
        {response.results?.map((person) => (
          <CharCard key={person.id} person={person} />
        ))}
      </Container>
      <ButtonsContainer>
        <button
          className={response.info.prev ? "hvr-pulse-grow" : "disabled"}
          disabled={!response.info.prev}
          onClick={() => setCurrentPage(response.info.prev)}
        >
          Anterior
        </button>
        <button
          className={response.info.next ? "hvr-pulse-grow" : "disabled"}
          disabled={!response.info.next}
          onClick={() =>
            response.info.next !== null
              ? setCurrentPage(response.info.next)
              : null
          }
        >
          Próxima
        </button>
      </ButtonsContainer>
    </>
  );
}

export default Characters;
