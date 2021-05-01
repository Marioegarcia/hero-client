import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutBasic(props) {
    const {routes} = props;
    return (
        <>
        
        <LoadRoutes routes={routes} />

        </>
    )
}


function LoadRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }