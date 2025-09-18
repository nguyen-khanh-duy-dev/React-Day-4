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
            })
            .catch((error) => {
                setLoading(false)
                setError(error)
            })
    }, [url])

    return children({ data, loading, error })
}

export default DataFetcher
