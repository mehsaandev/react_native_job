import { useState,useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env'


// const rapidApiKey = RAPID_API_KEY
const useFetch = (endpoint,query) =>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
         ...query
        },
        headers: {
          'X-RapidAPI-Key': '30262a253emsh6fae280387b5846p1bdc54jsn6b8f9f7281a2',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () =>{
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("There is an error")

        }
        finally{
                setIsLoading(false)
        }
      }

      useEffect(() => {
       fetchData()
      }, [])

      const refetch = () =>{
        setIsLoading(true)
        fetchData()
      }
      

      return {data,isLoading,error,refetch}

}

export default useFetch