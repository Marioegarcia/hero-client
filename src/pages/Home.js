import React from 'react'
import { Tabs,Row,Col } from 'antd';

import Login from '../components/Login'
import Register from '../components/Register';

const { TabPane } = Tabs;


export default function Home() {

   

    return (
        
        <Row>
        <Col span={20} offset={2}>
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="LOGIN" key="1">
            <Login/>
            </TabPane>
            <TabPane tab="REGISTER" key="2">
            <Register/>
            </TabPane>
           
        </Tabs>
        </Col>
      </Row>  
    )
}

