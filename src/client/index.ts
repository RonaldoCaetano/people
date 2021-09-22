import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer TOKEN",
  },
  cache: new InMemoryCache(),
});

export default client;
