import { Outlet } from "react-router"
import "./RootLayout.css"

const RootLayout = () => {

  return (
    <main className="main">
        <header>
            <h2 className="logo">Tapiwa Mazarura</h2>
            <nav className="nav">
                <ul className="list">
                    <li className="listItem"><a className="link" href="/">Home</a></li>
                    <li className="listItem"><a className="link" href="/">About Me</a></li>
                    <li className="listItem"><a className="link" href="/">Portfolio</a></li>
                    <li className="listItem"><a className="link" href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <Outlet/>
 
    </main>
  )
}

export default RootLayout