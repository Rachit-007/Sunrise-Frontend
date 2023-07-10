import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_BACKEND_URL,
  credentials: "include",
});

export default client;
