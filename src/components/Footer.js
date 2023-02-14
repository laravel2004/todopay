import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";

const Footerr = () => {
    return(
        <div style={{background : '#1f2641', paddingTop : 50, paddingBottom : 50, color : "white"}}>
            <Row style={{marginLeft : 100, marginRight : 100}} justify = 'space-around' >
                <Col span={5}>
                    <h4>TO DO LIST</h4>
                    <p style={{marginTop : 20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veniam?</p>
                </Col>
                <Row justify={'space-around'} style ={{gap : 100}}>
                    <Col>
                        <h4>Primacy</h4>
                        <div style={{marginTop : 20}}>
                            <p>Privacy Policy</p>
                            <p>Terms and conditions</p>
                            <p>Refund Policy</p>
                        </div>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <div style={{marginTop : 20}}>
                            <p>+62 8888 9999 100</p>
                            <p>todolist@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Row>
            <Row justify={'center'} style= {{marginTop : 50}}>
                <Footer>Created by aguungdwinnn</Footer>
            </Row>
        </div>
    )
}

export default Footerr;