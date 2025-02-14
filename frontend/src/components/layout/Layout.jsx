import { Outlet } from "react-router-dom"
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './Layout.css'

function Layout() {
    return (
        <>
            <Header />

            <div className="container">
                <main>
                    <Outlet />
                </main>

                <Sidebar />
            </div>
        </>
    )
}

export default Layout