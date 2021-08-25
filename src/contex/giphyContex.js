import React from "react"
import { useState, useContext, useEffect } from "react"
import axios from '../config/api/axios'

export const GiphyContext = React.createContext(null)

const GiphyData = (props) => {
  const [data, setData] = useState([])
  const [ironGiphy, setIronGiphy] = useState([])
  const [keysearch, setKeysearch] = useState("")

  const state = {
    data,
    keysearch,
    setKeysearch,
    ironGiphy
  }

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