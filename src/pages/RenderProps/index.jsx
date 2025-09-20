import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import DataFetcher from "../../components/DataFetcher"
import styles from "./RenderProps.module.scss"

function RenderProps() {
    return (
        <div className={styles.content}>
            <div className={styles.left_content}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading) return <div>Loading posts...</div>
                        if (error) return <div>Error: {error.message}</div>

                        return (
                            <div className={styles.posts}>
                                <h3>Posts</h3>
                                {data?.map((post) => (
                                    <div key={post.id}>{post.title}</div>
                                ))}
                            </div>
                        )
                    }}
                </DataFetcher>

                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error }) => {
                        {
                            console.log(error?.message)
                        }
                        if (loading) return <div>Loading users...</div>
                        if (error) return <div>Error: {error.message}</div>
                        return (
                            <div className={styles.users}>
                                <h3>Users</h3>
                                {data?.map((user) => (
                                    <div key={user.id}>
                                        {user.name} - {user.email}
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </DataFetcher>
            </div>
        </div>
    )
}

export default RenderProps
