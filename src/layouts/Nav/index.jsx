import { NavLink, Outlet } from "react-router-dom"
import { Page } from '../../pages'


const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h1>Hero Profile</h1>
                    </div>
                    <div>
                        <NavLink to='/' className="but">Appearance</NavLink>
                        <NavLink to='/powers' className="but">Powers</NavLink>
                        <NavLink to='/bio' className="but">Bio</NavLink>
                    </div>
                </nav>
            </header>
            <Page />
            <Outlet />
        </>
    )
}

export default Nav