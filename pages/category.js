import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, InputNumber, Button, Popconfirm, Form, Typography, List, Card } from 'antd';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ModalItem from '../components/Modal';
import ButtonItem from '../components/Button';
import Select from '../components/Select';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import * as categoryAction from '../redux/categoryReducer'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Category() {
  const { loading } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const history = useRouter();
  useEffect(() => {
    dispatch(categoryAction.onFetchCategory())
  }, [])
  const showModal = (e) => {
    e.stopPropagation()
    onReset();
    setShow(!show);
  }

  const clickDevice = () => {
    history.push('/device')
  }
  const data = [
    {
      title: <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>App Chat Nhật</div>
        <div className='flex gap-4' >
          <div className=' cursor-pointer ' onClick={showModal}>Sửa</div>
          <div className=' cursor-pointer '>Xoá</div>
        </div>
      </div>,
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolo'
    },
    {
      title: <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Ứng dụng Laichim</div>
        <div className='flex gap-4' >
          <div className=' cursor-pointer ' onClick={showModal}>Sửa</div>
          <div className=' cursor-pointer '>Xoá</div>
        </div>
      </div>,
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. DoloLorem ipsum, dolor sit amet consectetur adipisicing elit. Dolo'
    },
    {
      title: 'Title 3',
      content: 'sdsd'
    },
    {
      title: 'Title 4',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. DoloLorem ipsum, dolor sit amet consectetur adipisicing elit. Dolo'
    },
    {
      title: 'Title 5',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. DoloLorem ipsum, dolor sit amet consectetur adipisicing elit. DoloLorem ipsum, dolor sit amet consectetur adipisicing elit. DoloLorem ipsum, dolor sit amet consectetur adipisicing elit. Dolo'
    },
    {
      title: 'Title 6',
      content: 'vsv'
    },
  ];

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Layout>
        <ModalItem show={show} showModal={showModal} >
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Input name='name' label='Tên Loại' required={true} message='Tên loại không được bỏ trống' />
            <Form.Item {...tailLayout}>
              {/* <ButtonItem text='Thêm' type='submit' /> */}
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </ModalItem>
        <List
          grid={{
            gutter: 5,
            column: 6,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card style={{ height: 160, overflowY: 'auto' }} title={item.title} size='small' >
                <div onClick={clickDevice} style={{ minHeight: '95px' }} className=" cursor-pointer ">
                  {item.content}
                </div>
              </Card>
            </List.Item>
          )}
        />
      </Layout>
    </>
  )
}
