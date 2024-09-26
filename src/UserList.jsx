import { useState } from "react";

const UserList = () => {
  const [visibleUserId, setVisibleUserId] = useState(null);

  const people = [
    {
      name: "Filip",
      tel: "609 554 547",
      city: "Sosnowiec",
      id: crypto.randomUUID(),
    },
    {
      name: "Kacper",
      tel: "123 456 789",
      city: "Kraków",
      id: crypto.randomUUID(),
    },
    {
      name: "Karol",
      tel: "123 666 789",
      city: "Hel",
      id: crypto.randomUUID(),
    },
  ];

  // Funkcja do przełączania widoczności
  const toggleDetails = (id) => {
    setVisibleUserId(visibleUserId === id ? null : id);
  };

  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <span>{person.name}</span>
          <button onClick={() => toggleDetails(person.id)}>
            {visibleUserId === person.id ? "Ukryj" : "Pokaż"}
          </button>
          {visibleUserId === person.id && (
            <div>
              <p>Telefon: {person.tel}</p>
              <p>Miasto: {person.city}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
