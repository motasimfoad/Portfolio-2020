import React from 'react';
import '../project_main/style.css';
import {
  Col,
  Card,
  Row,
  CardGroup,
  CardDeck,
  CardColumns
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLink} from '@fortawesome/free-solid-svg-icons';
import info from '../../const/project_info.json';

console.log(info.data);

function PM() {
  return (
      <Row xl={12} className="main_row">

      {info.data.map(item => ( 
      <Col xl={4}  key={item.name} className="card_col">
      <Card className="card_main">
        <blockquote className="blockquote mb-0 card-body">
          <h2>
          {item.name}
          </h2>
          <footer className="blockquote-footer">
              built using <strong title="Source Title">ReactJS, HASURA</strong>
          </footer>
        </blockquote>
        <Card.Body>
        <Card.Link href="#"><FontAwesomeIcon className="icon" size="lg" icon={faImages} /></Card.Link>
        <Card.Link href="#"><FontAwesomeIcon className="icon" size="lg" icon={faLink} /></Card.Link>
      </Card.Body>
      </Card>
      </Col>
      ))}
      
    </Row>
  );
}

export default PM;
