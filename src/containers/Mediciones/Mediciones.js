import React, { Component } from 'react';
import { Row,Col } from 'react-flexbox-grid';
import './Mediciones.css'
import MedicionesForm from '../../components/MedicionesForm/MedicionesForm'
import MedicionesList from '../../components/MedicionesList/MedicionesList'

class Mediciones extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Row className="Mediciones pt-card" center="xs">
        <Col xs={12} style={{padding: 0}}>
            <Row start="xs">
              <Col className="Mediciones-Title" xs={12}>
                <h5>Mediciones</h5>
              </Col>
              <Col xs={12}>
                <MedicionesForm />
              </Col>
              <Col xs={12}>
                <h6>Tabla</h6>
              </Col>
              <Col xs={12}>
                <MedicionesList mediciones={[{}]} />
              </Col>
            </Row>
        </Col>
      </Row>
    );
  }
}


export default Mediciones;
