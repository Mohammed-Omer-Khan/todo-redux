import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AddNewTask = _ => {

  const { Option } = Select;
  const dispatch = useDispatch();
  const website = useSelector((state) => state.website);
  const navigate = useNavigate();

  const addTask = values => {
    let arr = website?.tasks || [];
    values.id = `TAS${Date.now()}`;
    arr.push(values);
    dispatch({type: 'SET_ADD_TASK', payload: arr});
  }

  useEffect(() => {
    if(website?.addTask === true) {
      navigate('/');
    }
  }, [website, navigate])

  return (
    <div className="tasks-bg">
      <div className="add-task-container">
        <div className="tasks-head">
          <span className='tasks-head-span'>Add New Task</span>
        </div>
        <div className="add-task-form-section">
          <Row>
            <Col className="ant-col-24" md={24}>
              <Form layout='vertical'onFinish={addTask}>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{required: true, message: 'Please enter the name'}]} name="name">
                      <Input type="text" placeholder='Name' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{required: true, message: 'Please enter the description'}]} name="description">
                      <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} type="text" placeholder='Description' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{required: true, message: 'Please select the type'}]} name="type">
                      <Select suffixIcon={<i className='fas fa-chevron-down' />} type="text" placeholder='Type'>
                        <Option value="todo">To Do</Option>
                        <Option value="inprogress">In Progress</Option>
                        <Option value="done">Done</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24 add-task-btn-col' md={24}>
                    <Button className='add-task-btn' htmlType='submit'>Add Task</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default AddNewTask;