import React from 'react'
import {  Input, Button,Row,Col,Form } from 'antd';

export default function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
    return (
        <div>
      <Row>
         <Col span={20} offset={2}>
             <Form
           
            name="basic"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
           
            name="email"
            rules={[
                {
                type: 'email',
                message:'Ingrese un email'
                },
            ]}
            >
            Email    
            <Input />
            </Form.Item>
    
            <Form.Item
            
            name="password"
            rules={[
                {
                required: true,
                message: 'Ingresa una contraseña!',
                },
            ]}
            >
            Password
            <Input.Password />
            </Form.Item>
    
           
    
            <Form.Item>
            <Button style={{width:'100%'}} type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        </Col>
      </Row> 
          
        </div>
    )
}
