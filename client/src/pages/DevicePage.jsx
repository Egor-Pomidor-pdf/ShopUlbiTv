import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/star.jpg'
import { data, useParams } from 'react-router-dom';
import { fetchDevice } from '../http/deviceAPI';

const DevicePage = () => {
 const [device, setDevice] = useState({info: []})
 const {id} = useParams() 
 useEffect(() => {
  fetchDevice(id).then(data => setDevice(data))
 }, [])

  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover' }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid ligtgray' }}
          >
            <h3>От {device.price} рублей</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>

        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h3>Характеристики</h3>
        {device.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>

  );
};

export default DevicePage;