import React from "react"
import { useState, useContext, useEffect } from "react"
import axios from '../config/api/axios'
import Axios from "axios"

export const GiphyContext = React.createContext(null)

const GiphyData = (props) => {
  const [data, setData] = useState([])
  const [ironGiphy, setIronGiphy] = useState([])
  const [keysearch, setKeysearch] = useState("")
  const [loading, setLoading] = useState(false)

  const state = {
    data,
    keysearch,
    setKeysearch,
    ironGiphy,
    loading
  }

  useEffect(() => {
    const getiphyIronman = () => {
      axios({
        method: 'get',
        params: { q: 'iron man', limit: 9 }
      })
        .then(({ data }) => {
          setIronGiphy(data.data.map(gif => gif.images.original.url))
        })
        .catch(err => {
          console.log(err);
        })
    }

    getiphyIronman()
  }, [])

  useEffect(() => {
    if (keysearch !== "") {
      setLoading(true)
      let cancel
      axios({
        method: 'get',
        params: { q: keysearch, limit: 9 },
        cancelToken: new Axios.CancelToken(c => cancel = c)
      })
        .then(({ data }) => {
          setData(data.data.map(gif => gif.images.original.url))
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          if (Axios.isCancel(err)) return
        })
      return () => cancel()
    } else {
      setData([])
    }

  }, [keysearch])

  return (
    <GiphyContext.Provider value={state}>
      {props.children}
    </GiphyContext.Provider>
  )
}

export const useGiphyData = () => {
  const context = useContext(GiphyContext)
  if (context === undefined) {
    throw new Error(`useGiphy must be use within a Giphy Provider`)
  }

  return context
}

export default GiphyData