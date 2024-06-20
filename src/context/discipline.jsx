import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DisciplineContext = createContext({
  disciplines: [],
});

const DisciplineContextProvider = ({ children }) => {
  const [disciplines, setDisciplines] = useState([]);
  const addDisciplines = (newDiscipline) => {
    let createDate = new Date(newDiscipline.createDate)
    createDate.setHours(createDate.getHours()+3)
    setDisciplines([...disciplines, { ...newDiscipline, id: uuidv4(), createDate: createDate  }]);
  };
  const editDiscipline = (id, description) => {
    let newDisciplines = disciplines;
    let discipline = newDisciplines.find((discipline) => id === discipline.id);
    discipline.description = description
    setDisciplines(newDisciplines);
  };

  return (
    <DisciplineContext.Provider value={{ disciplines, addDisciplines, editDiscipline }}>
      {children}
    </DisciplineContext.Provider>
  );
};

export { DisciplineContext };

export default DisciplineContextProvider;
