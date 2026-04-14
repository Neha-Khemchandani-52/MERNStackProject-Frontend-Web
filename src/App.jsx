import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Premium from "./components/Premium"
import PrivacyPolicy from "./components/PrivacyPolicy"
import Terms from "./components/Terms";
import About from "./components/About";
import Contact from "./components/Contact";
import RefundPolicy from "./components/RefundPolicy";

import Chat from "./components/Chat"

import { Provider } from "react-redux"
import { appStore } from "./utils/appStore"



function App() {

  return (

    <Provider store={appStore}>
      
    <>
    {/* <NavBar/> */}

    <BrowserRouter basename="/">
      <Routes>
      {/* Parent Route Body and profile, logic, ect are child routes inside it*/ }
      <Route path="/" element={<Body />} > 

        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/chat/:targetUserId" element={<Chat />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

      </Route>

        {/* <Route path="/" element={<div>Home page</div>}/>
        <Route path="/login" element={<div>Login page</div>}></Route>
        <Route path="/profile" element={<div>Profile page</div>}></Route> */}
  
      </Routes>

    </BrowserRouter>
     
    </>
    </Provider>
  )
}

export default App
