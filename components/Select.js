import { Select as SelectItem, Form } from 'antd'
import React from 'react'
const { Option } = SelectItem;
export default function Select({ name, label, required, message,option }) {

    const onSelect = (value) => {
        console.log(value);
    }
    return (
        <>
            <Form.Item
                name="category"
                label="Loại thiết bị"
                rules={[
                    {
                        required: true,
                        message: 'Loại thiết bị không được bổ trống'
                    },
                ]}
            >
                <SelectItem
                    placeholder="Select a option and change input text above"
                    onChange={onSelect}
                    allowClear
                >
                    <Option value="1">male</Option>
                    <Option value="2">female</Option>
                    <Option value="3">other</Option>
                </SelectItem>
            </Form.Item>
        </>
    )
}
