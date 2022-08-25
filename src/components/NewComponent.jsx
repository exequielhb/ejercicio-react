import { useState } from "react";
import '../components/styles.css';

export function NewComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //   ------------------------------------------

  const [info, setInfo] = useState({ name: "exe", age: 25 });

  console.log(info);

  const changeInfo = (e) => {
    setInfo({
      ...info,
      name: (e.target.value = "Exequiel"),
      lastName: (e.target.value = "Herrera"),
    });
  };

  //   -------------------------------------------------

  const [load, setload] = useState(false);

  const changeLoad = () => {
    if (load) {
      setload(false);
    } else {
      setload(true);
    }
  };

  console.log(load);

  // -------------------------------------------------

  const [animals, setAnimals] = useState(["Raccoon"]);

  const animalsList = ["Grogu", "vulpex", "Thala-siren", "Porgs", "Ewok"];

  const addAnimal = (e) => {
    setAnimals([...animals, ...animalsList]);
  };

  console.log(animals);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Restar</button>
      <hr/>
      <button onClick={changeInfo}>Change Info</button>

      <hr/>

      <button onClick={changeLoad}>Change Loading</button>

      <hr/>

      <button onClick={addAnimal}>Add Animal</button>
    </div>
  );
}
