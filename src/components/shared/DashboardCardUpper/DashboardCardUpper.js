import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardCardUpper(props) {
    return (
        <div className='card'>
            <Row>
                <Col>
                    <div className='icon-wrapper'>
                        <FontAwesomeIcon icon={faHome} size="3x"/>
                    </div>
                </Col>
                <Col>
                    <div className='card-title'>
                        Sales Today
                    </div>
                    <div className='card-value'>
                        $1,000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    </div>
                </Col>
            </Row>
            
        </div>
    );
}

export default DashboardCardUpper;