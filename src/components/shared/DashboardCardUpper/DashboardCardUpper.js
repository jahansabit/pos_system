import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function DashboardCardUpper({card_color, card_icon, card_title, card_value}) {
    return (
        <div className='card' style={{backgroundColor: card_color}}>
            <Row className='justify-content-around"'>
                <Col md={4} >
                    <div className='icon-wrapper'>
                        <FontAwesomeIcon icon={card_icon} size="2x"/>
                    </div>
                </Col>
                <Col md={8}>
                    <div className='card-title'>
                        {card_title}
                    </div>
                    <div className='card-value'>
                        {card_value}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DashboardCardUpper;