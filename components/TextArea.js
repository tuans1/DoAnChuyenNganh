import { Input, Form } from 'antd';

export default function TextArea({ rows, maxLength, placeholder }) {
    const TArea = Input.TextArea;
    return (
        <>
            <Form.Item
                name="intro"
                label="Intro"
                rules={[{ required: true, message: 'Please input Intro' }]}
            >
                <TArea showCount rows={rows} maxLength={250} />
            </Form.Item>
        </>
    )
}
