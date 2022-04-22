import React from 'react'
import { Button as ButtonItem } from 'antd';

export default function Button({ type, text, htmlType, newClass, style, onReset, onClick }) {

    const handleClick = () => {
        onClick();
    }
    return (
        <>
            <ButtonItem htmlType={htmlType} onClick={handleClick} className={newClass} style={style} type={type}>{text}</ButtonItem>
        </>
    )

}
