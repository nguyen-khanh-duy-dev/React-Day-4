import { useEffect, useState } from "react"

function DataFetcher({ url, children }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                // Cần set Error lại ở đây = null. Bởi vì: Khi lần đầu sai url -> Error được set
                // Nếu ko set lại thì Error vẫn lưu giá trị của lần đầu bị lỗi ở error
                setError(null)
            })
            .catch((error) => {
                setLoading(false)
                setError(error)
            })
    }, [url])

    return children({ data, loading, error })
}

export default DataFetcher
