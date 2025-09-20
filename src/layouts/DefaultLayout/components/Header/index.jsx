import { NavLink } from "react-router"

import AppLogo from "../AppLogo"
import styles from "./Header.module.scss"
import SearchForm from "../SearchForm"
import MyCourses from "../MyCourses"
import Notification from "../Notification"
import UserMenu from "../UserMenu"

function Header() {
    return (
        <div className={styles.container}>
            <NavLink to={"/"}>
                <AppLogo />
            </NavLink>
            <SearchForm />
            <div className={styles.right}>
                <MyCourses />
                <Notification />
                <UserMenu />
            </div>
        </div>
    )
}

export default Header
