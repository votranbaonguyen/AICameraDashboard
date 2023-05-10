import React, { useEffect, useState } from 'react'
import AlertSettingTable from '../../components/AlertSetting/AlertSettingTable'
import { getAllAlertSetting } from '../../redux/alertSetting/alertSettingSlice'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import AlertSettingInfo from '../../components/AlertSetting/AlertSettingInfo'

export const Setting = () => {
  const dispatch = useDispatch()
  const [screenStatus, setScreenStatus] = useState("table")
  const [alertSettingInfo,setAlertSettingInfo] = useState(null)

  const ChangeToInfoScreen = (data) => {
    setScreenStatus("info")
    setAlertSettingInfo(data)
  }

  const ChangeToTableScreen = () => {
    setScreenStatus("table")
    setAlertSettingInfo(null)
  }

  useEffect(() => {
    dispatch(getAllAlertSetting())
  }, [])
  return (
    <div>
      {screenStatus === "table" ?
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}><Button onClick={() => ChangeToInfoScreen(null)} type="primary">Add New Alert Setting</Button></div>
          <AlertSettingTable ChangeToInfoScreen={ChangeToInfoScreen}/>
        </div>
        :
        <AlertSettingInfo ChangeToTableScreen={ChangeToTableScreen} setAlertSettingInfo={setAlertSettingInfo} setScreenStatus={setScreenStatus} alertSettingInfo={alertSettingInfo}/>
      }
    </div>
  )
}
