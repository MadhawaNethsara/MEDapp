
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./login.jsx";
import Stureg from "./Admin/Stureg.jsx";
import Updatet from "./Admin/Updatet.jsx";
import Admin from "./Admin/Admin.jsx";
import Layout from './Layout.jsx';
import Sdash from "./Student/Sdash.jsx";

import Ddash from "./Doctor/Ddash.jsx";
import Cdash from "./Committe/Cdash.jsx"
function App() {


  return (
   //<Login />
  //<Stureg />
    //<Updatet />
  //<Admin/>
    //<Layout/>
    <Sdash/>
    //<Ddash/>
    //<Cdash/>




    //  <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Layout />}>
    //       <Route index element={<Login />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="help" element={<Help />} />
    //       <Route path="admin" element={<AdminDashboard />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App





