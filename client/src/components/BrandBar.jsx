import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Col, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row
            className="d-flex"
        >
            {device.brands.map(brand =>
                <Col
                    key={brand.id}
                >
                    <Card
                        style={{ cursor: 'pointer' }}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id  ? 'danger' : 'light'}
                        className="p-3"
                    > 
                        {brand.name}
                    </Card></Col>

            )}
        </Row>
    );
});

export default BrandBar;