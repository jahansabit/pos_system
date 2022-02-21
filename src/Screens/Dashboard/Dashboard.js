import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/dashboard.css';
import DashboardCardUpper from '../../components/shared/DashboardCardUpper/DashboardCardUpper';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faClockRotateLeft, faCreditCard, faDollar } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
    return (
        <div>
            <div className='upper_cards_section'>
                <Row className='justify-content-around'>
                    <DashboardCardUpper card_color={"#00A389"} card_icon={faChartLine} card_title={"Sales Today"} card_value={"৳1000"} />
                    <DashboardCardUpper card_color={"#4A52FF"} card_icon={faClockRotateLeft} card_title={"Top Hours"} card_value={"11:00 am"} />
                    <div className='card' style={{backgroundColor: "#00A389"}}>
                        <Row className='justify-content-around"'>
                            <Col md={4} >
                                <div className='icon-wrapper'>
                                    <FontAwesomeIcon icon={faCreditCard} size="2x"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='card-title'>
                                    Payment Methods
                                </div>
                                <div className='card-value' style={{fontSize: "10px"}}>
                                    bKash: 12313 <br/>
                                    Rocket: 12313 <br/>
                                    Nagad: 12313
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <DashboardCardUpper card_color={"#FF5B5B"} card_icon={faDollar} card_title={"Today Gross"} card_value={"৳1764.72"} />
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;