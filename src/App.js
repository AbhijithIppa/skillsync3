import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import One from "./components/one/One";
import Card from './components/card/Card';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer"
import RootLayout from './components/RootLayout';
import Login from "./components/login/Login";
import ModalQ from './components/modalQ/ModalQ';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignUp from './components/signUp/SignUp';
import Followers from './components/followers/Followers';
import Suggestions from './components/suggestions/Suggestions';

function App() {
  const routerobj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:"/modalQ",
          element:<ModalQ></ModalQ>
        },{
          path:"/",
          element:<SignUp></SignUp>
        },
        {
          path:'/followers',
          element:<Followers></Followers>
        },
        {
          path:'/suggestions',
          element:<Suggestions></Suggestions>
        }
        
  ]}

  ])
  return (
    <div className="App">
      <RouterProvider router={routerobj}>
      
      </RouterProvider>
     
    </div>
  );
}

export default App;
