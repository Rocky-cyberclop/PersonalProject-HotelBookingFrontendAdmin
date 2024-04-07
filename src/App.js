import { publicRoute, privateRoute } from "./routes/Route";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "./routes/PrivateRouter";
import { Fragment } from "react";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <Routes>
          {publicRoute.map((singleRoute, index) => {
            const Path = singleRoute.path;
            const Page = singleRoute.page;
            const Layout = Fragment;
            return (
              <Route
                key={index}
                path={Path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
              </Route>
            );
          })}

          {privateRoute.map((singleRoute, index) => {
            const Page = singleRoute.page;
            const Path = singleRoute.path;
            const Layout = singleRoute.layout;
            return (
              <Route
                key={index}
                path={Path}
                element={
                  <PrivateRouter>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRouter>
                }
              >
              </Route>
            );
          })}
          
        </Routes>

      </div>

    </Router>
  );
}

export default App;
