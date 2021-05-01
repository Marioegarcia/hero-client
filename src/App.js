import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import { Layout } from "antd";

import MenuTop from "./components/MenuTop";

const {  Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Layout style={{ height: "100vh" }}>
             
              <MenuTop />
              
              <Content style={{ margin: "24px 16px 0", backgroundColor:'transparent' }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  {routes.map((route, index) => (
                    <RouteWithSubRoutes key={index} {...route} />
                  ))}
                </div>
              </Content>
            </Layout>
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
