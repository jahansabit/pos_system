import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/dashboard.css';


function Dashboard(props) {
    return (
        <div>
            <div className='upper_cards_section'>
                <Card style={{ width: '18rem', }}>
                    <Card.Body>
                        <Card.Title>৳7332.73</Card.Title>
                        <Card.Text className='card_secondary_text'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Dashboard;