import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Main from './components/pages/Main';
import HackerNews from './components/pages/HackerNews';
import Login from './components/pages/Login';


function App({authService}) {
  return (
    <>
      <Routes>
        <Route path ="/" exact={true} element={<Login authService={authService}/>} />
        <Route path ="/main/:userId" 
              exact={true} 
              element={<Main authService={authService} />} />
        <Route path ="/hacker" exact={true} element={<HackerNews />} />
      </Routes>
    </>
  );
}

export default App;
