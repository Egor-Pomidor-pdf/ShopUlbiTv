import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from "../assets/star.jpg"
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate() 
  return (
    <Col md={3} className={"mt-3"} onClick={() => {
        // console.log()  
        navigate(`/device/${device.id}`)}
    }
       >
        <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className="d-flex justify-content-between align-items-center text-black-50  ">
            <div>Samsung...</div>
            <div className="d-flex align-items-center mt-2">
                <div>{device.rating}</div>
                <Image width={20} height={20} src={star}></Image>
            </div>
        </div>
        <div>{device.name}</div>
        </Card>
    </Col>
  );
};

export default DeviceItem;