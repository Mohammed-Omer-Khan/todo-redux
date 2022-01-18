import { lazy, Suspense } from "react";
import { Result, Button } from "antd";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import './routes.css';


const Tasks = lazy(() => import('./components/tasks/Tasks'));
const AddNewTask = lazy(() => import('./components/tasks/AddNewTask'));

const NotFound = _ => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exists"
    extra={<Link to="/tasks"><Button type="primary">Back Tasks</Button></Link>}
  />
);


const Layout = _ => (
  <Suspense fallback={<LoadingOutlined className="spinner" spin />}>
    <Router basename="">
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add-new-task" element={<AddNewTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Suspense>
);

export default Layout;


