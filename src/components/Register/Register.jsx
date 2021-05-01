import React,{useState} from "react";
import { Input, Button, Row, Col, Form,notification } from "antd";
import {
    Redirect
  } from "react-router-dom";

import { signUpApi } from "../../api/user";

export default function Register() {
    const [data, setData] = useState({});
    
      const handleChange = (e) => {
          setData({
            ...data,
            [e.target.name]: e.target.value,
          });
        
      };

      
    
  const onFinish = async() => {
    
    const result = await signUpApi(data);
    console.log(result);
    if (!result.ok) {
        notification.error({
            message:result.message
        })
    }else{
        notification.success({
            message:result.message
        })
        setData({});
        
    }
  

  };
console.log(data);

  return (
    <div>
      <Row>
        <Col span={20} offset={2}>
          <Form
            name="basic"
            initialValues={{
              remember: false,
            }}
            onFinish={onFinish}
            onChange={handleChange}
          >
            <Form.Item
             
              rules={[
                {
                  required: true,
                  message: "Ingrese un email",
                },
              ]}
            >
              Name
              <Input   
              name="name"
              value={data.name}
              />
            </Form.Item>
            

            <Form.Item
              
              rules={[
                {
                  type: "email",
                  message: "Ingrese un email",
                  required: true,
                },
              ]}
            >
              Email
              <Input  
               value={data.email}
              name="email" />
            </Form.Item>

            <Form.Item
             
              rules={[
                {
                  required: true,
                  message: "Ingresa una contraseña!",
                },
              ]}
            >
              Password
              <Input.Password   
               value={data.password}
              name="password"/>
            </Form.Item>

            <Form.Item
              
              rules={[
                {
                  required: true,
                  message: "Ingresa una contraseña!",
                },
              ]}
            >
              Repetir password
              <Input.Password
               value={data.repeatPassword} 
              name="repeatPassword" 
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
