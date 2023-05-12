import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AlertInfo from '../../components/Alert/AlertInfo'
import AlertTable from '../../components/Alert/AlertTable'
import { getAllAlert } from '../../redux/alert/alertSlice'

export const HomeAlert = () => {
  const dispatch = useDispatch()
  const [screen, setScreen] = useState("table")
  const [alertInfo, setAlertInfo] = useState(null)

  const changeToInfoScreen = (data) => {
    setScreen("info")
    setAlertInfo(data)
  }

  const changeToTableScreen = () => {
    setScreen("table")
    setAlertInfo(null)
  }

  useEffect(() => {
    dispatch(getAllAlert())
  }, [])
  return (
    <div style={{height:"100%"}}>
      {
        screen === "table" ?
          <AlertTable changeToInfoScreen={changeToInfoScreen}/>
          :
          <AlertInfo changeToTableScreen={changeToTableScreen} alertInfo={alertInfo}/>
      }


    </div>
  )
}
