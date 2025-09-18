import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import styles from "./HookDemo.module.scss"
import useApi from "../../hooks/useApi"
import useToggle from "../../hooks/useToggle"

function HookDemo() {
    const [data, loading, error, refetch] = useApi(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    )

    const [dataUser, loadingUser, errorUser, refetchUser] = useApi(
        "https://jsonplaceholder.typicode.com/users"
    )

    const [isVisible, toggleVisible, setVisible] = useToggle(false)

    return (
        <div>
            <Header />

            <div className={styles.content}>
                <Sidebar />
                <div className={styles.left_content}>
                    {/* Demo sử dụng 2 endpoint */}
                    <div className={styles.demoApi}>
                        <div>
                            <button onClick={refetch}>Refetch Posts</button>

                            {loading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}

                            {!loading &&
                                !error &&
                                data?.map((item) => (
                                    <div key={item.id}>{item.title}</div>
                                ))}
                        </div>
                        <div>
                            <button onClick={refetchUser}>Refetch Users</button>

                            {loadingUser && <div>Loading User...</div>}
                            {errorUser && <div>Error: {errorUser}</div>}

                            {!loadingUser &&
                                !errorUser &&
                                dataUser?.map((user) => (
                                    <div key={user.id}>
                                        {user.name}- {user.email}
                                    </div>
                                ))}
                        </div>
                    </div>
                    {/* Demo sử dụng toggle */}
                    <div className={styles.demoToggle}>
                        <button onClick={toggleVisible}>
                            {isVisible ? "Hide" : "Show"} Content
                        </button>
                        <button
                            onClick={() => {
                                setVisible(true)
                            }}
                        >
                            Force Show
                        </button>
                        {isVisible && <div>This content can be toggled!</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HookDemo
