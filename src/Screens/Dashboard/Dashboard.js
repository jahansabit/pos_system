import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/dashboard.css';
import DashboardCardUpper from '../../components/shared/DashboardCardUpper/DashboardCardUpper';


function Dashboard(props) {
    return (
        <div>
            <div className='upper_cards_section'>
                <DashboardCardUpper />
            </div>
        </div>
    );
}

export default Dashboard;