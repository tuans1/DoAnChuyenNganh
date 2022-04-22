import { Avatar, Input, Tooltip } from 'antd'
import React from 'react'
import Layout from '../components/Layout'
import { PhoneOutlined, SendOutlined, VideoCameraOutlined } from '@ant-design/icons'
export default function Chat() {
  return (
    <Layout>
      <div className="chat bg-white mt-6 flex">
        <div className="chat__left bg-white flex flex-col" style={{ width: '30%', height: '90vh' }}>
          <div className='left__header pd-left'>
            <h1 className='text-2xl'>Chats</h1>
          </div>
          <div className='left__search pd-left'>
            <Input placeholder="Search chats" className='h-9' />
          </div>
          <div className="left__user mt-6 overflow-y-scroll">
            <div className="user flex py-2 items-center   px-8">
              <div className='mr-4'>
                <Avatar style={{ background: 'white' }} size="large" className='cursor-pointer' icon={<img src='https://joeschmoe.io/api/v1/random' />} />
              </div>
              <div className='flex items-center justify-between overflow-hidden' style={{ width: '100%' }}>
                <div className="user__message  overflow-hidden text-ellipsis whitespace-nowrap" style={{ width: '80%' }}>
                  <h5 className='p-0 m-0 text-lg'>Leo VN</h5>
                  <span className='fs-15'>I sent you all the files. Good luck with 😃asd</span>
                </div>
                <div className="user__time flex flex-col items-end ">
                  <div style={{ width: 23, height: 23, borderRadius: '50px' }} className=' bg-blue-500 text-center text-white'>3</div>
                  <small className='text-xs'>3:04 PM</small>
                </div>
              </div>
            </div>
            <div className="user flex py-2 items-center  px-8">
              <div className='mr-4'>
                <Avatar style={{ background: 'white' }} size="large" className='cursor-pointer' icon={<img src='https://joeschmoe.io/api/v1/random' />} />
              </div>
              <div className='flex items-center justify-between overflow-hidden' style={{ width: '100%' }}>
                <div className="user__message  overflow-hidden text-ellipsis whitespace-nowrap" style={{ width: '80%' }}>
                  <h5 className='p-0 m-0 text-lg'>Leo VN</h5>
                  <span className='fs-15'>I sent you all the files. Good luck with 😃asd</span>
                </div>
                <div className="user__time flex flex-col items-end ">
                  <div style={{ width: 23, height: 23, borderRadius: '50px' }} className='bg-blue-500 text-center text-white'>3</div>
                  <small className='text-xs'>3:04 PM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat__right bg-pink-300 " style={{ width: '70%' }}>
          <div className="right__header border-b">
            <div className="py-4 px-7 flex items-center justify-between">
              <div className='flex'>
                <Avatar size="large" className='cursor-pointer' icon={<img src='https://joeschmoe.io/api/v1/random' />} />
                <p className='text-lg ml-4'>Byrom Huite</p>
              </div>
              <div>
                <PhoneOutlined className='py-2 px-4 mr-4 bg-white rounded-sm text-xl' style={{ color: "#0ABB87" }} />
                <VideoCameraOutlined className='py-2 px-4 bg-white rounded-sm text-xl' style={{ color: "#FFB822" }} />
              </div>
            </div>
          </div>
          <div className="right__body" style={{ height: '480px' }}>
            <div className=" flex flex-col">
              <div className="message__friend my-4 mx-7 ">
                <Tooltip placement='top' arrowPointAtCenter title="prompt text">
                  <div style={{ maxWidth: '600px', backgroundColor: '#EBEBEB' }} className="text-black  py-1 px-3  fs-14 inline-block rounded-md bg-slate-200">What files are you talking about? I'm sorry I can't remember right now.</div >
                </Tooltip>
              </div>
              <div className="message__me my-4 mx-7 " style={{ marginLeft: 'auto' }}>
                <Tooltip placement='top' arrowPointAtCenter title="prompt text">
                  <div style={{ maxWidth: '600px', backgroundColor: '#0A80FF' }} className="text-white py-1 px-3 fs-14 inline-block rounded-md bg-slate-500">Thank you so much. These files are very important to me. I guess you didn't make any changes to these files. So I need the original versions of these files. Thank you very much again.</div >
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="right__footer border-t" >
            <div className="py-4 px-7 flex items-center">
              <Input placeholder="Write a message" className='h-9' />
              <div className='py-2 px-3 rounded-sm ml-4 cursor-pointer' style={{ backgroundColor: '#0a80ff' }}>
                <SendOutlined className='overflow-hidden ' style={{ margin: '0 auto', color: 'white' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
