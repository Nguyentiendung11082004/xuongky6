import instance from '@/configs/axios';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, message } from 'antd'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const {mutate} = useMutation({
        mutationFn: async (user:any)=> {
            try {
                const response = await instance.post('/auth/signup',user);
                return response;
            } catch (error) {
                throw new Error('cal api that bai')
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: 'sign up thanh cong'
            })
           
        },
        onError: () => {
            messageApi.open({
                type: 'error',
                content: 'sign up that bai'
            })
        }
    })
    const onSubmit = (value:any) => {
  mutate(value)
    }
  return (
    <div>
        <Form
                onFinish={onSubmit}
            >
                 <Form.Item label="name" name='name'>
                    <Input placeholder="name" />
                </Form.Item>
                <Form.Item label="email" name='email'>
                    <Input placeholder="email" />
                </Form.Item>
                <Form.Item label="password" name="password"  >
                    <Input placeholder=" password"   />
                </Form.Item>
                <Form.Item label="confirmPassword" name="confirmPassword"  >
                    <Input placeholder=" confirmPassword"   />
                </Form.Item>
                <Form.Item >
                    <Button  htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
    </div>
  )
}

export default Signup