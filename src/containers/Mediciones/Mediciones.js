import React, { Component } from 'react';
import { Row,Col } from 'react-flexbox-grid';
import axios from 'axios'
import './Mediciones.css'
import MedicionesForm from '../../components/MedicionesForm/MedicionesForm'
import MedicionesList from '../../components/MedicionesList/MedicionesList'
import { data } from './data.js'
import moment from 'moment'

class Mediciones extends Component {
  constructor(){
    super()
    this.state = {
      isFetching: false,
      measurement: []
    }
  }

  fetchData(dateRange){
    this.setState({isFetching: true})
    axios.get(`http://localhost:3000`)
      .then((value) => {
        this.setState({isFetching: false})
        const rows = data.TimeSeriesDataPoints.map( row => {
          return {
            id: row.HistorianID,
            Fecha:  moment(row.Time).format('DD/MM/YYYY'),
            Hora:  moment(row.Time).format('HH:mm:ss:SSS'),
            Valor: row.Value,
            Calidad: row.Quality
          }
        })
        this.setState({measurement: rows})
      })
      .catch((err) => {
        console.log(err);
      })
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
                <MedicionesForm
                  fetchData={ (dateRange) => this.fetchData(dateRange) } />
              </Col>
              <Col xs={12}>
                <h6>Datos</h6>
              </Col>
              <Col xs={12}>
                <MedicionesList
                  isFetching={this.state.isFetching}
                  mediciones={this.state.measurement}  />
              </Col>
            </Row>
        </Col>
      </Row>
    );
  }
}


export default Mediciones;
