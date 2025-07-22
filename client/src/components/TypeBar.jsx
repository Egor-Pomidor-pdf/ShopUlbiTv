import React, { useContext } from 'react';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
  return ( 
    <div>
       <ListGroup>
      {device.types.map(type => 
        <ListGroup.Item 
            style={{cursor: 'pointer'}}
            active = {type.id === device.selectedType.id}
            onClick = {() => device.setSelectedType(type)}
            key={type.id}>
            {type.name}
            {/* {type.id === device.selectedType.id && "Selected"}  */}
        </ListGroup.Item>
      )}
    </ListGroup>
    </div>
  );
});

export default TypeBar;