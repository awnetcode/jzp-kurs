import { PersonInfo } from "./components/Personinfo";

const people = [
  {
    name: "Filip",
    tel: "609 554 547",
    city: "Sosnowiec",
    id: crypto.randomUUID() 
  },
  {
    name: "Kacper",
    tel: "123 456 789",
    city: "Kraków",
    id: crypto.randomUUID()
  },
  {
    name: "Karol",
    tel: "123 666 789",
    city: "Hel",
    id: crypto.randomUUID()
  }
];

const PersonInfoElements = people.map((person) => (
  <PersonInfo 
  key={person.tel} 
  name={person.name} 
  tel={person.tel} 
  city={person.city} 
  />));

function App() {

  return (
  <>
      <h1>Lista kontaktów</h1>
      {PersonInfoElements}
  </>
  )
}

export default App