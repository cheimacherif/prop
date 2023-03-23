import React from "react";
import Card from "react-bootstrap/Card";
import image from './image.jpg'


function photo({style}) {
  return (
    <div className="Pic" style={style}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}/>
      </Card>
    </div>
  );
}

export default photo;