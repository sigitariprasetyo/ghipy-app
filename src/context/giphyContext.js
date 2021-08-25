import React from "react"
import { useState, useContext, useEffect } from "react"
import axios from '../config/api/axios'

export const GiphyContext = React.createContext(null)

const GiphyData = (props) => {
  const [data, setData] = useState([])
  const [ironGiphy, setIronGiphy] = useState([
    {
      "id": "AbYxDs20DECQw",
      "url": "https://media3.giphy.com/media/AbYxDs20DECQw/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "3lvqNXheb679S",
      "url": "https://media3.giphy.com/media/3lvqNXheb679S/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "MUlmRFnTQxwJ2",
      "url": "https://media1.giphy.com/media/MUlmRFnTQxwJ2/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "l3975CZuyQgoNVuOA",
      "url": "https://media2.giphy.com/media/l3975CZuyQgoNVuOA/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "wEgs1cd7vDTt6",
      "url": "https://media1.giphy.com/media/wEgs1cd7vDTt6/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "AbYxDs20DECQw",
      "url": "https://media3.giphy.com/media/AbYxDs20DECQw/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "3lvqNXheb679S",
      "url": "https://media3.giphy.com/media/3lvqNXheb679S/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "MUlmRFnTQxwJ2",
      "url": "https://media1.giphy.com/media/MUlmRFnTQxwJ2/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    },
    {
      "id": "l3975CZuyQgoNVuOA",
      "url": "https://media2.giphy.com/media/l3975CZuyQgoNVuOA/giphy.gif?cid=aa030e10refr0ddfifsvl1rrzzaqfpp72c6qa6tavavhi211&rid=giphy.gif&ct=g"
    }
  ])
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