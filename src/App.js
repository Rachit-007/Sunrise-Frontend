import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import client from "./graphql/client";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div id="recaptcha-container"></div>
          <ToastContainer />
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
