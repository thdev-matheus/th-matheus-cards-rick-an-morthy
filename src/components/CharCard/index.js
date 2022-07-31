import BoxImg from "../BoxImg";
import CardBox from "../CardBox";
import PersonName from "../PersonName";
import StatusTitle from "../StatusTitle";

function CharCard({ person }) {
  return (
    <CardBox
      bgColor={
        person.status === "Alive"
          ? "#309930c3"
          : person.status === "Dead"
          ? "#F8CCCEc3"
          : "#909000c3"
      }
      borderColor={
        person.status === "Alive"
          ? "#E4E4E4"
          : person.status === "Dead"
          ? "#9C7677"
          : "#EAB543"
      }
    >
      <PersonName title={person.name}>{person.name}</PersonName>
      <BoxImg>
        <img src={person.image} alt="" width="150px" />
      </BoxImg>
      <StatusTitle
        color={
          person.status === "Alive"
            ? "#aaffaa"
            : person.status === "Dead"
            ? "#6D214F"
            : "#CAD3C8"
        }
      >
        Species: <span title={person.species}>{person.species}</span>
      </StatusTitle>
      <StatusTitle
        color={
          person.status === "Alive"
            ? "#55E6C1"
            : person.status === "Dead"
            ? "#B33771"
            : "#FEA47F"
        }
      >
        Status: <span>{person.status}</span>
      </StatusTitle>
    </CardBox>
  );
}

export default CharCard;
