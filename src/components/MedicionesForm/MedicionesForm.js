import React, { Component } from 'react';
import { Row,Col } from 'react-flexbox-grid';
import {
  Popover,
  PopoverInteractionKind,
  Position,
  Switch,
  Button } from '@blueprintjs/core';
import { DateTimePicker, TimePickerPrecision} from "@blueprintjs/datetime";
import moment from 'moment';
import isEmpty from 'lodash/isEmpty'
import './MedicionesForm.css'

class MedicionesForm extends Component{
  constructor(){
    super()
    this.state = {
      dateRange: [null, null]
    }
  }

  handleDateRange(dateRange, index){
    console.log(dateRange);
    const newDateRange = [this.state.dateRange[0],this.state.dateRange[1]]
    newDateRange[index] = dateRange;
    this.setState({dateRange: newDateRange});
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
      <form>
        <Row className="MedicionesForm" around="xs">
            <Col xs={12} sm={3} >
              <Switch checked={true} label="16 - Medición" onChange={() => {}} />
              <Switch checked={true} label="17 - Medición" onChange={() => {}} />
              <Switch checked={true} label="18 - Medición" onChange={() => {}} />
            </Col>
            <Col xs={12} sm={3} >
              <Switch checked={true} label="19 - Medición" onChange={() => {}} />
              <Switch checked={true} label="20 - Medición" onChange={() => {}} />
              <Switch checked={true} label="21 - Medición" onChange={() => {}} />
            </Col>
            <Col xs={12} sm={3} >
              <Switch checked={true} label="23 - Medición" onChange={() => {}} />
              <Switch checked={true} label="24 - Medición" onChange={() => {}} />
              <Switch checked={true} label="25 - Medición" onChange={() => {}} />

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
              </Row>
            </Col>

        </Row>

      </form>
    );
  }
}


export default MedicionesForm;
