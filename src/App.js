import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ProductListing from "./components/product/productListing";
import client from "./graphql/client";
import Layout from "./layout";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
