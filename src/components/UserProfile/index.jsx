import styles from "./UserProfile.module.scss"
import withLoading from "../../hoc/withLoading.jsx"

const UserProfile = withLoading(() => {
    return (
        <div className={styles.container}>
            <h3>User Profile</h3>
            <img src="img-user-profile.jpg" />
            <div className={styles.personalInfo}>
                <p>Name: Moew Moew</p>
                <p>Email: moewmoew@gmail.com</p>
            </div>
        </div>
    )
})

export default UserProfile
