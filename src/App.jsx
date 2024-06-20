import "./App.css";
import AppContextProvider from "./context/AppContext";
import DisciplineContextProvider from "./context/discipline";
import { Router } from "./routes";

export default function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <DisciplineContextProvider>
          <Router />
        </DisciplineContextProvider>
      </AppContextProvider>
    </div>
  );
}
