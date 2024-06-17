import { createRoutesFromChildren,  Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout/>}>
      <Route index  element={<Home/>} ></Route>
      <Route path="contact" element={<Contact/>} ></Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
