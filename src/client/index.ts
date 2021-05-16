import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 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",
  },
  cache: new InMemoryCache(),
});

export default client;
