import styles from "./Profile.module.scss"
import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"

function Profile() {
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(preview)
        }
    }, [preview])

    const handleChange = (e) => {
        const image = e.target.files[0]

        const previewUrl = URL.createObjectURL(image)
        setPreview(previewUrl)
    }
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.wrapper}>
                    <h3>Upload your avatar</h3>
                    <label className={styles.uploadAvatar}>
                        <img
                            src={preview || "/avatar_placeholder.png"}
                            className={styles.image}
                        ></img>
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleChange}
                        ></input>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Profile
