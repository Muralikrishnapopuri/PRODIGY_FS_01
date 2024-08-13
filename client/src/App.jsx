import {BrowserRouter,Routes,Route} from "react-router-dom"
import Entry from "./components/Entry"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { createContext, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
export const store = createContext();

function App() {
  const [token,setToken] =useState(null);
 

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entry/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/myprofile" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </store.Provider>
    </CookiesProvider>
  )
}

export default App
