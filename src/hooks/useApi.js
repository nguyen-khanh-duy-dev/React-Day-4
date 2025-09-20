import { useEffect, useState } from "react"

function useApi(url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [reload, setReload] = useState(0)

    // setTimeout giúp nhận biết được có refresh hay ko, do lấy dữ liệu lại quá nhanh
    const refetch = () => {
        setLoading(true)
        setTimeout(() => {
            setReload((prev) => prev + 1)
            setLoading(false)
        }, 500)
    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((resultData) => {
                setData(resultData)
                setLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [url, reload])

    return [data, loading, error, refetch]
}

export default useApi
