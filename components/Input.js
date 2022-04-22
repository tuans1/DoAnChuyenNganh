import React from 'react'
import { Input as InputItem, Form } from 'antd';
export default function Input({ name, label, required, message }) {
    return (
        <>
            <Form.Item
                name={name}
                label={label}
                rules={[
                    {
                        required: required,
                        message: message
                    },
                ]}
            >
                <InputItem />
            </Form.Item>
        </>
    )
}
