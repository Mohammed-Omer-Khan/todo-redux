import { Provider } from "react-redux";
import configureStore from './store';
import Routes from "./Routes";
import 'antd/dist/antd.min.css';

const App = _ => {
  const store = configureStore();
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};
export default App;