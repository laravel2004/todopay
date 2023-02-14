import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { RootContex } from "../App";
import { Link } from "react-router-dom";
import { Card, Row, Button } from "antd";
import Circle from './../assets/circle.png'
import { PlusOutlined } from "@ant-design/icons/lib/icons";

const Detail = () => {

    const context = useContext(RootContex);
    const {data} = context


    const handleDelete = (list) => {
        context.setData(context.data.map(outer => {
            return{
                 ...outer,
                message : outer.message.filter(inner => inner.list !== list)
            }
        }))
        localStorage.setItem('data', JSON.stringify(context.data))
        localStorage.setItem('index', JSON.stringify(context.parameter))
    }
    return(
        <>
            <Navbar />
            <div style={{paddingTop : 200, background : '#FFFFFF', paddingBottom:100}}>
                <div>
                    <h1>Group : {data[context.parameter] ?<span>{data[context.parameter].title.nama}</span> :null}</h1>
                </div>
                {data[context.parameter].message[0] !== undefined ?
                    <div>
                        <Row justify={'center'} style={{gap : 50, marginTop : 100}}>
                            <Card style={{width : 800, textAlign : 'center'}} size ='default'>
                                <Row justify={"space-between"} style = {{fontSize : 15, fontWeight : 500, marginBottom : 20}}>
                                        <span>Nama</span>
                                        <span>Quantity</span>
                                        <span>Hapus</span>
                                </Row>
                                {data[context.parameter].message[0] ? data[context.parameter].message.map((item, index) => 
                                <div key={index}>
                                    <Row justify={"space-between"} style = {{marginTop : 10}}>
                                        <span>{item.list}</span>
                                        <span>{item.quantity}</span>
                                        <Button style={{background : 'orange', color: 'white' }} onClick={() => handleDelete(item.list)}>Delete</Button>
                                    </Row>
                                </div>) : null}
                            </Card>
                        </Row>
                        <Row justify={'space-around'} style = {{color : 'white', marginTop : 100, }}>
                            <Button type="default" size="large" style={{background :'#16ABF8', color : 'white'}}>
                                <Link to ='/add' >
                                    Tambah List
                                </Link>
                            </Button>
                            <Button type="default" size="large" style={{background :'green', color : 'white'}}>
                                <Link to='/' >
                                    Kembali ke group stage
                                </Link>
                            </Button>
                        </Row>
                    </div>
                : 
                <Row justify={'center'} style ={{marginTop : 50}}>
                    <Card 
                    style={{width : 300, border : 5, borderStyle : "solid", borderColor : 'gray'}}
                    hoverable = 'true'>
                        <div style={{textAlign : 'center'}}>
                            <Link to='/add' >
                                <div style={{position : "relative"}}>
                                    <img src = {Circle} alt = 'foto' />
                                    <PlusOutlined style={{color : 'white', fontSize : 50, position : "absolute", top : 35, right : 97}} />
                                </div>
                                    <p>Add your list buying in there</p>
                            </Link>
                        </div>
                    </Card>
                </Row>
                }
            </div>
        </>
    )
}

export default Detail;