import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootContex } from "../App";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Button, Col, Input, Row, Card } from "antd";
import Pikachu from './../assets/pikachu.jfif'


const Add = () => {

    const navigate = useNavigate()

    const context = useContext(RootContex)
    const [param, setParam] = useState(context.parameter)
    const {data} = context
    const [list, setList] = useState('');
    const [quantity, setQuantity] = useState()
    const {setRequest} = context
    
    let message = [...data[param].message,{
        list, quantity
    }]

    const handleList = (e) => { 
        e.preventDefault()
        setRequest( message)
        setParam(context.parameter)
        context.setData(prevState => {
            return(
                prevState.map((item, index) => {
                    if(index === param) {
                        return {...item, message : message}
                    }
                    return item
                })
            )
        })
        navigate('/')
        localStorage.setItem('data', JSON.stringify(context.data))
        localStorage.setItem('index', JSON.stringify(context.parameter))
    }
    return(
        <>
            <Navbar />
            <div style={{paddingTop : 200, background : '#FFFFFF', paddingBottom:100}}>
               <div style={{marginLeft : 200, marginRight:200, textAlign:'center'}}>
                    <h1>Tambah List : {data[param].title.nama} </h1>
                    <Row justify={'space-around'} style ={{marginTop : 100}}>
                        <img alt="foto" src={Pikachu} style = {{borderRadius : 50}} />
                        <Col>
                            <Card 
                            hoverable = 'true'
                            style={{color : 'black', marginTop : 100, textAlign : "start", border : 3, borderStyle : 'solid', borderColor : 'gray'}}>
                                <label style={{fontSize : 20, marginTop : 10}}>List
                                    <br />
                                    <Input 
                                    style={{padding : 10, borderRadius : 15, width : 300, marginTop : 10}} 
                                    onChange={(e) => setList(e.target.value)} 
                                    placeholder = 'Exp : Beli Kue' 
                                    value = {list} />
                                </label>
                                <br />
                                <br />
                                <label style={{fontSize : 20, marginTop : 10}}>Quantity
                                    <br />
                                    <Input 
                                    style={{padding : 10, borderRadius : 15, width : 300, marginTop : 10}} 
                                    onChange={(e) => setQuantity(e.target.value)} 
                                    placeholder = 'Rupiah' 
                                    value = {quantity}  />
                                </label>
                                <br /><br />
                                <div style={{textAlign : 'center'}}>
                                    <Button type="default" size="large" style={{background :'#16ABF8', color : 'white'}}>
                                        <Link state={param} style = {{width : 100}}  onClick={handleList}>
                                            Tambah
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
               </div>
            </div>
        </>
    )
}

export default Add;