import { Button, Col, Row, Card, Modal, Input } from "antd";
import './../css/dashboard.css'
import React, { useContext, useState, useEffect } from "react";
import Navbar from './../components/Navbar.js'
import { PlusOutlined } from "@ant-design/icons/lib/icons";
import { Link } from "react-router-dom";
import { RootContex } from "../App";
import Circle from './../assets/circle.png'

const Dasboard = () => {
    const contex = useContext(RootContex)

    const [open, setOpen] = useState(false);
    const [nama, setNama] = useState('');

    const list = {
        title : {nama},
        message : []
    }

    const handleOK = (e) => {
        contex.setData([...contex.data, list])
        setOpen(false)
        setNama('')
    }
    
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true)
    }

    const handleCancel = (e) => {
        setOpen(false);
        e.preventDefault()
    }
    const handleDelete = (props) => {
        contex.setData(contex.data.filter(item => item.title.nama !== props))
    }

    return(
        <>
            <div>
                <Navbar />
                <div className="hero">
                    <div style={{marginLeft : 100, marginRight : 100}}>
                        <Row justify={"space-around"}>
                            <Col><h2 
                            className="title" 
                            style={{color : "black"}} >GROUP STAGE BELANJAAN</h2></Col>
                            <Col>
                                <Button 
                                type="primary" 
                                size="large" 
                                onClick={handleOpen} 
                                style={{background : '#16ABF8'}}>
                                    <p 
                                    style={{color : 'whitesmoke', fontWeight : 600}}>ADD
                                    </p>
                                </Button>
                                <Modal
                                    title = "Tambah Group"
                                    open = {open}
                                    onOk = {handleOK}
                                    onCancel = {handleCancel}
                                >
                                    <div 
                                    style={{textAlign : 'center'}}>
                                        <p 
                                        style={{marginTop: 20, fontSize : 15,}}>Belanja untuk kegiatan : </p>
                                        <Input 
                                        style={{padding : 10, marginTop : 10, borderRadius : 15, width : 300 }} 
                                        placeholder = 'Exp : Ulang tahun ' 
                                        size="large" 
                                        onChange={(e) => setNama(e.target.value)} 
                                        value = {nama} />
                                    </div>
                                </Modal>
                            </Col>
                        </Row>
                        <Row 
                        style={{gap : 50, marginTop : 100}} 
                        justify={'center'}>
                            {contex.data[0] !== undefined ? 
                            contex.data.map((items, index) =>
                                <Card key={index}
                                style={{width : 400, textAlign :'center'}} 
                                title = "Group Belanjaan" 
                                hoverable = 'true'>
                                    <Link to='/detail' state={index}>
                                        <div style={{fontSize : 30, fontWeight : 400, color : 'black'}}>
                                            "{items.title.nama}"
                                        </div>
                                    </Link>
                                    <Button style={{marginTop : 20, background : 'orange', color : 'white'}}
                                    size = 'large'
                                    onClick={() => handleDelete(items.title.nama)}>Delete</Button>
                                </Card>
                            ) : 
                            <Card 
                            style={{width : 300, border : 5, borderStyle : "solid", borderColor : 'gray'}}
                            hoverable = 'true'>
                                <div onClick={handleOpen} style={{textAlign : 'center'}}>
                                    <Link >
                                        <div style={{position : "relative"}}>
                                            <img src = {Circle} alt = 'foto' />
                                            <PlusOutlined style={{color : 'white', fontSize : 50, position : "absolute", top : 35, right : 97}} />
                                        </div>
                                        <p>Add your list buying in there</p>
                                    </Link>
                                </div>
                            </Card>
                            }
                            
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dasboard;