import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'
import { Row,Col } from 'react-flexbox-grid';
import { Spinner, Classes } from '@blueprintjs/core';

const columns = [
{
  key: 'id',
  name: 'ID',
  width: 64,
},
{
  key: 'Fecha',
  name: 'Fecha',
  sortable : true,
},
{
  key: 'Hora',
  name: 'Hora (UTC)',
  sortable : true,
},
{
  key: 'Valor',
  name: 'Valor',
  sortable : true,
},
{
  key: 'Calidad',
  name: 'Calidad',
  sortable : true,
},
]

export default class MedicionesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.mediciones,
    }
  }

  rowGetter(rowIdx){
    return this.state.rows[rowIdx]
  }

  componentWillReceiveProps(nextProps){
   this.setState({rows: nextProps.mediciones});
  }

  handleGridSort(sortColumn,sortDirection){
    const comparer = (a,b) => {
      if(sortDirection === 'ASC'){
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      }else if(sortDirection === 'DESC'){
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    }
    let rows = sortDirection === 'NONE' ? this.props.mediciones.slice(0) : this.state.rows.sort(comparer);
    this.setState({ rows: rows })
  }

  renderContent(){
    if(this.props.isFetching){
      return ( <Spinner className={Classes.LARGE} /> )
    }

    if(this.state.rows.length > 0){
      return (  <ReactDataGrid
      onGridSort={(a,b) => this.handleGridSort(a,b)}
      columns={columns}
      rowGetter={data => this.rowGetter(data)}
      rowsCount={this.state.rows.length}
      style={{margin:16}}
      isScrolling={false}
      defaultPageSize={10}
      showCellBorders= {true}
      paginationToolbarProps={{
        pageSizes: [
          10,
          50,
          100
        ]
      }} /> )
    }
    else{
      return ( <p> No hay registros para Mostrar </p> )
    }
  }

  render() {
    return (
      <Row center='xs'>
        <Col xs={12}>
          { this.renderContent() }
        </Col>
      </Row>
    )
  }
}
