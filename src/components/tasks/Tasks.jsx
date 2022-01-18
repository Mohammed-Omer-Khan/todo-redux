import { Button, Col, Row, Modal, Form, Select, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

const Tasks = _ => {

  const { Option } = Select;
  const { useForm } = Form;
  const [form] = useForm();
  const dispatch = useDispatch();

  const website = useSelector((state) => state.website);
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    if (website?.addTask === true) {
      if (website?.tasks?.length > 0) {
        setTasks(website?.tasks);
      }
      website.addTask = false;
    }
  }, [website]);

  const onEdit = data => {
    setModalVisible(true);
    form.setFieldsValue({ ...data });
    setId(data?.id);
  }

  const editTask = values => {
    let arr = website?.tasks || [];
    values.id = id;
    const index = arr?.findIndex(task => task.id === id);
    arr[index] = { ...values };
    dispatch({ type: 'SET_ADD_TASK', payload: arr });
    setModalVisible(false)
  }


  return (
    <div className="tasks-bg">
      <Modal title={<div className="tasks-head">
        Edit Task
      </div>}
        footer={null}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      >
        <div className="add-task-form-section">
          <Row>
            <Col className="ant-col-24" md={24}>
              <Form form={form} layout='vertical' onFinish={editTask}>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{ required: true, message: 'Please enter the name' }]} name="name">
                      <Input type="text" placeholder='Name' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{ required: true, message: 'Please enter the description' }]} name="description">
                      <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} type="text" placeholder='Description' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item rules={[{ required: true, message: 'Please select the type' }]} name="type">
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
                    <Button className='add-task-btn' htmlType='submit'>Edit Task</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Modal>
      <div className="tasks-container">
        <div className="tasks-head">
          <span className='tasks-head-span'>Tasks</span>
        </div>
        <div className="tasks-sections">
          <Row>
            <Col className='ant-col-24' md={18}></Col>
            <Col className='ant-col-24 add-btn-col' md={6}>
              <Link to="/add-new-task"><Button className='add-new-task-btn'>Add New Task</Button></Link>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col className="ant-col-24" md={8}>
              <div className="task-section">
                <div className="tasks-section-head">To Do</div>
                <div className="tasks">
                  {
                    tasks?.filter(data => data.type === 'todo')?.map((task, ind) => (
                      <Row key={ind}>
                        <Col className='ant-col-24' md={24}>
                          <div className="tasks-details">
                            <div className="task-name">{task.name}</div>
                            <div className="task-des">{task.description}</div>
                            <div className="edit-icon"><i onClick={() => onEdit(task)} className='fa fa-pencil' /></div>
                          </div>
                        </Col>
                      </Row>
                    ))
                  }
                </div>
              </div>
            </Col>
            <Col className="ant-col-24" md={8}>
              <div className="task-section">
                <div className="tasks-section-head">In Progress</div>
                <div className="tasks">
                  {
                    tasks?.filter(data => data.type === 'inprogress')?.map((task, ind) => (
                      <Row key={ind}>
                        <Col className='ant-col-24' md={24}>
                          <div className="tasks-details">
                            <div className="task-name">{task.name}</div>
                            <div className="task-des">{task.description}</div>
                            <div className="edit-icon"><i onClick={() => onEdit(task)} className='fa fa-pencil' /></div>
                          </div>
                        </Col>
                      </Row>
                    ))
                  }
                </div>
              </div>
            </Col>
            <Col className="ant-col-24" md={8}>
              <div className="task-section">
                <div className="tasks-section-head">Done</div>
                <div className="tasks">
                  {
                    tasks?.filter(data => data.type === 'done')?.map((task, ind) => (
                      <Row key={ind}>
                        <Col className='ant-col-24' md={24}>
                          <div className="tasks-details">
                            <div className="task-name">{task.name}</div>
                            <div className="task-des">{task.description}</div>
                            <div className="edit-icon"><i onClick={() => onEdit(task)} className='fa fa-pencil' /></div>
                          </div>
                        </Col>
                      </Row>
                    ))
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Tasks;