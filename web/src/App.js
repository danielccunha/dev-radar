import React, { useState, useEffect } from "react";

import api from "./services/api";
import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

export default () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    (async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    })();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={(dev) => setDevs([...devs, dev])} />
      </aside>
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
};
