import Router from "./router/Router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './helpers/store/reducer';


const store =configureStore({reducer})
function App() {
  return (
    <div className="App">
      <Provider store={store}>

     <Router />
     <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
