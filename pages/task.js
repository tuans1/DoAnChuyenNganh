import { AntDesignOutlined, CalendarOutlined, CommentOutlined, DeleteOutlined, DoubleLeftOutlined, DoubleRightOutlined, EditOutlined, TagsOutlined, UserOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import styles from './task.module.scss'
import { Avatar, Card, DatePicker, Image, Progress, Space, Timeline, Tooltip } from 'antd';
import moment from 'moment';
import Button from '../components/Button';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function Task() {
  const [date, setDate] = useState('')
  const [showDatepicker, setShowDatepicker] = useState(false)
  const [collapse, setCollapse] = useState(true)
  const { Meta } = Card;
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const collapseRef = useRef();

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
    setEditorLoaded(true)
  }, [])

  useEffect(() => {
    if (collapse === false) {
      // collapseRef.current.style.transform = 'translateX(200px)';
      // console.log(collapseRef.current.classList)
    }
  }, [collapse])

  const onChangeDate = (date) => {
    if (date !== null) {
      const newDate = moment(date._d).format('DD/MM/YYYY')
      setDate(newDate)
    }
    setShowDatepicker(false)
  }
  const onShowDatepicker = () => {
    // setShowDatepicker(true)
  }
  const test = () => {
    setShowDatepicker(false)
  }
  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    console.log({ event, editor, data });
  }
  const handleSubmitComment = () => {
    alert("RUN")
  }
  return (
    <Layout>
      <div className="wrapper flex justify-between">
        <div className="left " style={!collapse ? { width: '100%' } : { width: '85%' }}>
          <div className="left__heading mb-6 z-50">
            <Button newClass="success" text='Luu' style={{ marginRight: '10px' }} />
            <span className='pr-2'>Create 1 week ago by</span>
            <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={33} />
            <span className='text-center pl-2'>Lương Anh Tuan</span>
            <span className='left__role ml-3'>Owner</span>
          </div>
          <div className="left__title mt-20">
            <span>đá ádasdasdasd</span>
          </div>
          <div className="left__content pt-4">
            <span>sdasas ádasd</span>
          </div>
          <div className="left__image mt-10 " style={!collapse ? { width: '100%' } : { width: '85%' }}>
            <Image.PreviewGroup>
              <Card
                style={{
                  width: 210, borderRadius: "8px",
                  overflow: "hidden"
                }}
                cover={
                  <Image height={120} width='100%' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb13c1c7-3fba-474c-a978-86577b8fe5f2/deyqyhb-641678a1-b497-4955-88d2-36d4847da1ca.png/v1/fill/w_622,h_350,strp/tranquility_by_sinsvalentine_deyqyhb-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZWIxM2MxYzctM2ZiYS00NzRjLWE5NzgtODY1NzdiOGZlNWYyXC9kZXlxeWhiLTY0MTY3OGExLWI0OTctNDk1NS04OGQyLTM2ZDQ4NDdkYTFjYS5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YAKcUNwu2kJnt7aS4kkFGJP7mPDMXzaVUGqcBzlA6dQ" />
                }
              >
                <Meta
                  title="Card title" className='text-center'
                />
              </Card>
              <Card
                style={{
                  width: 210, borderRadius: "8px",
                  overflow: "hidden"
                }}
                cover={
                  <Image style={{ objectFit: 'contain' }} height={120} width='100%' src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                }
              >
                <Meta
                  title="Card title" className='text-center'
                />
              </Card>
              <Card
                style={{
                  width: 210, borderRadius: "8px",
                  overflow: "hidden"
                }}
                cover={
                  <Image height={120} width='100%' src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                }
              >
                <Meta
                  title="Card title" className='text-center'
                />
              </Card>
              <Card
                style={{
                  width: 210, borderRadius: "8px",
                  overflow: "hidden"
                }}
                cover={
                  <Image height={120} width='100%' src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                }
              >
                <Meta
                  title="Card title" className='text-center'
                />
              </Card>
            </Image.PreviewGroup>
          </div>
          <div className="left__timeline mt-10 pt-6 pl-6">
            <Timeline>
              <Timeline.Item color="grey" className='timeline-icon' dot={<UserOutlined />}>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="grey" className='timeline-icon' dot={<CalendarOutlined />}>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="grey" className='timeline-icon' dot={<TagsOutlined />}>
                <p>timeline color testing</p>
              </Timeline.Item>
              <Timeline.Item>
                <div className='timeline__comment p-4'>
                  <div className="timeline__avatar float-left mr-4">
                    <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={33} />
                  </div>
                  <div className="timeline__content">
                    <div className="content__header flex justify-between align-top">
                      <div className="content__info">
                        <a href='#'><b>Luong Anh Tuan</b></a>
                        <span style={{ padding: '0 10px', fontSize: 13 }}>·</span>
                        <span>1 week ago</span>
                        <div className="comment">
                          adasdas
                        </div>
                      </div>
                      <div className="content__actions">
                        <span className='badge mr-5'>Author</span>
                        <span className='badge mr-5'>Owner</span>
                        <button className='action__btn mr-3'><CommentOutlined /></button>
                        <button className='action__btn mr-3'><EditOutlined /></button>
                        <button className='action__btn'><DeleteOutlined /></button>
                      </div>
                    </div>
                  </div>
                </div>
                <Collapse accordion>
                  <Panel header="This is panel header 1" key="1">
                    <div className='collapse__replies p-4'>
                      <div className="timeline__avatar float-left mr-4">
                        <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={33} />
                      </div>
                      <div className="timeline__content">
                        <div className="content__header flex justify-between align-top">
                          <div className="content__info">
                            <a href='#'><b>Luong Anh Tuan</b></a>
                            <span style={{ padding: '0 10px', fontSize: 13 }}>·</span>
                            <span>1 week ago</span>
                            <div className="comment">
                              adasdas
                            </div>
                          </div>
                          <div className="content__actions">
                            <span className='badge mr-5'>Author</span>
                            <span className='badge mr-5'>Owner</span>
                            <button className='action__btn mr-3'><CommentOutlined /></button>
                            <button className='action__btn mr-3'><EditOutlined /></button>
                            <button className='action__btn'><DeleteOutlined /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='collapse__replies p-4'>
                      <div className="timeline__avatar float-left mr-4">
                        <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={33} />
                      </div>
                      <div className="timeline__content">
                        <div className="content__header flex justify-between align-top">
                          <div className="content__info">
                            <a href='#'><b>Luong Anh Tuan</b></a>
                            <span style={{ padding: '0 10px', fontSize: 13 }}>·</span>
                            <span>1 week ago</span>
                            <div className="comment">
                              adasdas
                            </div>
                          </div>
                          <div className="content__actions">
                            <span className='badge mr-5'>Author</span>
                            <span className='badge mr-5'>Owner</span>
                            <button className='action__btn mr-3'><CommentOutlined /></button>
                            <button className='action__btn mr-3'><EditOutlined /></button>
                            <button className='action__btn'><DeleteOutlined /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <div className='timeline__comment p-4'>
                  <div className="timeline__avatar float-left mr-4">
                    <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={33} />
                  </div>
                  <div className="timeline__content">
                    <div className="content__header flex justify-between align-top">
                      <div className="content__info">
                        <a href='#'><b>Luong Anh Tuan</b></a>
                        <span style={{ padding: '0 10px', fontSize: 13 }}>·</span>
                        <span>1 week ago</span>
                        <div className="comment">
                          adasdas
                        </div>
                      </div>
                      <div className="content__actions">
                        <span className='badge mr-5'>Author</span>
                        <span className='badge mr-5'>Owner</span>
                        <button className='action__btn mr-3'><CommentOutlined /></button>
                        <button className='action__btn mr-3'><EditOutlined /></button>
                        <button className='action__btn'><DeleteOutlined /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </div>
          <div style={{ marginBottom: 50 }}>
            {editorLoaded && <CKEditor
              editor={ClassicEditor}
              config={{
                height: '800px',
                toolbar: ['|', 'bold', 'italic', 'uploadImage', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                heading: {
                  options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                  ]
                }
              }
              }
              data="<p>Hello from CKEditor 5!</p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!');
              }}
              onChange={(e, data) => onChangeEditor(e, data)}
              onBlur={(event, editor) => {
                console.log('Blur.');
              }}
              onFocus={(event, editor) => {
                console.log('Focus.');
              }}
            />}
            <Button onClick={handleSubmitComment} text='Comment' style={{ marginTop: '10px', float: 'right' }} />
          </div>
        </div>
        {collapse === false ? <div className={`${styles.right}`} ref={collapseRef}>
          <div className={`${styles.right__pTopBot} ${styles.right__collapse}`}>
            <DoubleRightOutlined onClick={() => setCollapse(true)} style={{ fontSize: '25px', float: 'right' }} />
          </div>
          <div className={`${styles.right__pTopBot} ${styles.right__assignee} flex justify-between`}>
            <div className={` ${styles.assignee} `}>
              <span>Assignee</span>
              <div className='flex items-center'>
                <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={40} />
                <div className='pl-3'>
                  <div>Luong Anh Tuan</div>
                </div>
              </div>
            </div>
            <div className={` ${styles.btn__edit}`}>
              <span className='cursor-pointer'>Edit</span>
            </div>
          </div>
          <div className={`${styles.right__pTopBot} ${styles.right__time}`}>
            <div className={` ${styles.time}`}  >
              <div>Time tracking</div>
              <Tooltip title="Time remaining: 2h" mouseEnterDelay={0.1}>
                <Progress trailColor="grey" percent={30} />
              </Tooltip>
              <div className='flex justify-between'>
                <span><b>Spent</b>: 8h</span>
                <span><b>Estimated</b>: 8h</span>
              </div>
            </div>
          </div>
          <div className={`${styles.right__pTopBot} ${styles.right__label} flex justify-between `}>
            <div className={` ${styles.label}`}  >
              <div>Labels</div>
              <div className={` ${styles.label__status} flex`}>
                <span>doing </span>
                <div className={styles.close_btn}>x</div>
              </div>
            </div>
            <div className={` ${styles.btn__edit}`}>
              <p className='cursor-pointer'>Edit</p>
            </div>
          </div>
          <div className={`${styles.right__pTopBot} ${styles.right__date} `}>
            <div className='flex justify-between'>
              <div className={` ${styles.label}`}  >
                <div>Due Date</div>
                <span>{date ? date : 'None'}</span>
                {date && <span className='pl-3 cursor-pointer' onClick={() => setDate('')}><b>Remove</b></span>}
              </div>
              <div className={` ${styles.btn__edit}`}>
                <span className='cursor-pointer' onClick={() => setShowDatepicker(true)}>Edit</span>
              </div>
            </div>
            {showDatepicker && <Space direction="vertical">
              <DatePicker size='large' open={showDatepicker} value={moment(date ? date : new Date, 'DD/MM/YYYY')} onChange={onChangeDate} format='DD/MM/YYYY' style={{ width: 'auto' }} onOpenChange={test} />
            </Space>
            }
          </div>
          <div className={`${styles.right__pTopBot} ${styles.right__participant}`}>
            <div className={` ${styles.label}`}  >
              <div>1 participant</div>
              <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={30} />
              <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={30} />
              <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={30} />
              <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={30} />
            </div>
          </div>
        </div>
          // RIGHT COLLAPSE
          : <div className={`${styles.short}`}>
            <div className={`${styles.short_collapse} ${styles.short__center} cursor-pointer`} onClick={() => setCollapse(false)} style={{ height: 67 }}>
              <DoubleLeftOutlined style={{ fontSize: '25px' }} />
            </div>
            <div className={`${styles.short__center} ${styles.short_assignee} `} >
              <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={40} />
              <span className='text-center' style={{ width: '80px' }}>Lương Anh Tuan</span>
            </div>
            <div className={`${styles.short__center} ${styles.short_time}`}>
              <svg id="Layer_1" width={30} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="cls-1" d="M391.6,134.1l28.07-38.42a21.33,21.33,0,1,0-34.45-25.17l-29.1,39.83A211.7,211.7,0,0,0,277.33,86.4V42.67H320A21.33,21.33,0,1,0,320,0H192a21.33,21.33,0,1,0,0,42.67h42.67V86.4C127,97.13,42.67,188.23,42.67,298.67,42.67,416.3,138.37,512,256,512s213.33-95.7,213.33-213.33A213,213,0,0,0,391.6,134.1ZM256,469.33c-94.1,0-170.67-76.56-170.67-170.67S161.9,128,256,128s170.67,76.56,170.67,170.67S350.1,469.33,256,469.33Z" /><path class="cls-1" d="M277.33,289.83v-76.5a21.33,21.33,0,1,0-42.67,0v85.33a21.34,21.34,0,0,0,6.25,15.08l64,64a21.33,21.33,0,1,0,30.17-30.17Z" /></svg>
              <span><b>E: </b>8h / <b>S: </b>7h</span>
            </div>
            <div className={`${styles.short__center} ${styles.short_label}  `} >
              <TagsOutlined style={{ fontSize: 30 }} />
            </div>
            <div className={`${styles.short__center} ${styles.short_date} `}>
              <CalendarOutlined style={{ fontSize: 30 }} />
              <span>05/11/2022</span>
            </div>
            <div className={`${styles.short__center} ${styles.short_participant}`}>
              <span>Participants</span>
              <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                <Avatar src="http://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_1_2269_700-1.jpg" size={30} />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
            </div>
          </div>}
        {/* END RIGHT*/}

      </div>
      <style jsx>
        {`
        .wrapper{
          // height:500px;
        }
        .left{
          width:85%;
          margin: auto;
          padding-right:10px;
          // background-color:yellow;
        }
        .left__role{
          padding:3px 6px;
          border:1px solid grey;
          border-radius:15px;
        }
        .left__heading{
          padding:15px 0;
          border-top:1px solid grey;
          margin-right:10px;
          border-bottom:1px solid grey;
          // position:fixed;
          // margin-bottom:50px;
          width:65%;
          // background-color:blue;
        }
        .left__timeline{
          border-top:1px solid red;
        }
        .left__image{
          display: grid;
          grid-template-columns: auto auto auto auto;
          gap:20px 50px;
        }
        // .left__comment{
        //   background-color:red;
        //   width:100%;
        //   height:70px;
        // }
        .content__actions{
          // line-height:20px;
        }
        .badge{
          padding:2px 8px 2px 8px;
          border: 1px solid green;
          border-radius:15px;
        }
        .action__btn{
          font-size:25px;
        }
      `}
      </style>
    </Layout >
  )
}
