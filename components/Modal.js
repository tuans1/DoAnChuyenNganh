import { Button, Modal as ModalItem } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default function Modal(props) {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      handleCancel();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = (e) => {
    console.log('Clicked cancel button');
    props.showModal(e);
  };
  return (
    <>
      <ModalItem title="Thêm mới Loại Thiết Bị" visible={props.show} footer={null} onCancel={handleCancel}>
        {props.children}
      </ModalItem>
    </>
  )
}
