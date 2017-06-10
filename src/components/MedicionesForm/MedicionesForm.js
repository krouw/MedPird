import React, { Component } from 'react';
import { Row,Col } from 'react-flexbox-grid';
import {
  Popover,
  PopoverInteractionKind,
  Position,
  Button } from '@blueprintjs/core';
import { DateTimePicker, TimePickerPrecision} from "@blueprintjs/datetime";
import moment from 'moment';
import isEmpty from 'lodash/isEmpty'
import './MedicionesForm.css'

class MedicionesForm extends Component{
  constructor(){
    super()
    this.state = {
      dateRange: [null, null],
      error: ''
    }
  }

  handleDateRange(dateRange, index){
    const newDateRange = [this.state.dateRange[0],this.state.dateRange[1]]
    newDateRange[index] = dateRange;
    this.setState({dateRange: newDateRange});
    if(!moment(newDateRange[0]).isBefore(moment(newDateRange[1]))){
      this.setState({error: 'La Fecha inicial debe ser menor que la final.'})
    }
    else{
      this.setState({error: ''})
    }
  }

  fetchData(){

    if(this.state.dateRange[0] === null || this.state.dateRange[1] === null){
      this.setState({error: 'Debes seleccionar un rango de fechas'})
    }
    else{
      if(isEmpty(this.state.error)){
        this.setState({error: ''})
        this.props.fetchData(this.state.dateRange)
      }
    }
  }

  render(){
    let popoverContent = (value, index) => {
      return(
        <div>
          <DateTimePicker
            timePickerProps={{showArrowButtons:true, precision:TimePickerPrecision.SECOND}}
            value={value} onChange={(value) => this.handleDateRange(value, index)} />
        </div>
       )
    }
    const Moment = (date) =>{
       if(date){
           return (<Button>
           {moment(date).format("DD/MM/YYYY H:m:s")}
         </Button>)
       }
       else{
         return (<Button>
           Seleccione una fecha
         </Button>)
       }
     }
    return (
        <Row className="MedicionesForm" around="xs">
            <Col xs={12}>
              <p>Consulta medicion df/dx</p>
            </Col>
            <Col className="MedicionesForm-Time" xs={12}>
              <h6>Rango de Tiempo</h6>
            </Col>
            <Col xs={12}>
              <Row start="xs">
                <Col xs={3}>
                  <Popover content={popoverContent(this.state.dateRange[0],0)}
                        interactionKind={PopoverInteractionKind.CLICK}
                        popoverClassName="DatePicker pt-popover-content-sizing"
                        position={Position.BOTTOM}
                        useSmartPositioning={false}>
                    <div className="MedicionesForm-Fecha">
                      { Moment(this.state.dateRange[0]) }
                    </div>
                  </Popover>
                </Col>
                <Col xs={1}>
                  <span className="MedicionesForm-Idicador pt-icon-large pt-icon-arrow-right"></span>
                </Col>
                <Col xs={3}>
                  <Popover content={popoverContent(this.state.dateRange[1],1)}
                        interactionKind={PopoverInteractionKind.CLICK}
                        popoverClassName="DatePicker pt-popover-content-sizing"
                        position={Position.BOTTOM}
                        useSmartPositioning={false}>
                    <div className="MedicionesForm-Fecha">
                      { Moment(this.state.dateRange[1]) }
                    </div>
                  </Popover>
                </Col>
                <Col xs={5}>
                  <Button
                    onClick={() => this.fetchData()}
                    className="MedicionesForm-Button pt-intent-primary"
                    text={'Enviar'}/>
                </Col>
                { !isEmpty(this.state.error) ?  <Col xs={12}>
                        <p className="MedicionesForm-Error">{this.state.error}</p>
                      </Col> : null}
              </Row>
            </Col>

        </Row>
    );
  }
}


export default MedicionesForm;
