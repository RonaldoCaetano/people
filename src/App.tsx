import React from "react";
import "./App.css";
import Main from "./components/Main";

import client from "./client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
