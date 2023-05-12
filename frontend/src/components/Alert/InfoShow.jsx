import { Col, Image, Row } from 'antd'
import React from 'react'
import { parseIframe } from '../../utils/parseIframe/parseIframe'

const InfoShow = ({ alertInfo }) => {
    const { area, employee } = alertInfo?.alertSetting
    console.log(alertInfo)
    return (
        <div style={{ marginTop: 10 }}>
            <Row >
                <Col style={{marginRight:30}} span={9}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <div>
                                <span style={{ fontWeight: "bold", fontSize: 15, marginBottom: 20 }}>Empolyee Info</span>
                                <div style={{ paddingBlock: 20, background: "white", boxShadow: "2px 2px 5px #ccc", borderRadius: 5, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <div>
                                        <Image
                                            width={200}
                                            src={employee?.imgLink}
                                        />
                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Name:</span>
                                        <span>{employee.name}</span>
                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Address:</span>
                                        <span>{employee.address}</span>
                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Phone:</span>
                                        <span>{employee.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <span style={{ fontWeight: "bold", fontSize: 15, marginBottom: 20 }}>Area Info</span>
                                <div style={{ paddingBlock: 20, background: "white", boxShadow: "2px 2px 5px #ccc", borderRadius: 5, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <div>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Area Name:</span>
                                        <span>{area.areaName}</span>
                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Camera Name:</span>
                                        <span>{area?.camera.camName}</span>
                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: "bold", marginRight: 5 }}>Camera's Security Level:</span>
                                        <span>{area?.camera.securityLevel}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>



                </Col>
                <Col span={14}>
                    <div>
                        <span style={{ fontWeight: "bold", fontSize: 15, marginBottom: 20 }}>Alert Info</span>
                        <div style={{ paddingBlock: 20, background: "white", boxShadow: "2px 2px 5px #ccc", borderRadius: 5, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <div>
                                <span style={{ fontWeight: "bold" , marginRight: 5}}>Alert Type:</span>
                                <span>{alertInfo?.alertSetting.alertName}</span>
                            </div>
                            <div style={{ marginTop: 15 }}>
                                <span style={{ fontWeight: "bold" , marginRight: 5}}>Scheduled Time:</span>
                                <span>{`${alertInfo?.alertSetting.startTime} - ${alertInfo?.alertSetting.endTime}`}</span>
                            </div>
                            <div style={{ marginTop: 15 }}>
                                <span style={{ fontWeight: "bold" , marginRight: 5}}>Actual Time:</span>
                                <span>{alertInfo.time}</span>
                            </div>
                            <div style={{ marginTop: 15 }}>
                                <span style={{ fontWeight: "bold" , marginRight: 5}}>Security Level:</span>
                                <span>{alertInfo.securityLevel}</span>
                            </div>
                            <div style={{ marginTop: 15, display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center" }}>
                                <span style={{ fontWeight: "bold" , marginRight: 5}}>Playback Video:</span>
                                <span>{parseIframe(alertInfo.playBack ? alertInfo.playBack : "<div style={{background: #0000,width:560,height:315}}></div>")}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default InfoShow
