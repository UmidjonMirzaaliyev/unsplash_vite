import axios from 'axios'
import { useEffect, useState } from 'react'

const customFetch = (params) => {
    const [response, setResponse] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchData = async (url) => {
        try {
            setIsPending(true)
            const request = await axios(url)
            setResponse(request.data.results)
        } catch (err) {
            setError(err)
        } finally {
            setIsPending(false)
        } 
    }


    useEffect(() => {
        fetchData(params)
    },[params])

    return {
        response,
        isPending,
        error,
        fetchData: url => fetchData(url)
    }
}

export default customFetch