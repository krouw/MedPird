import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'
import moment from 'moment'

const columns = [
{
  key: 'fecha',
  name: 'Fecha',
  sortable: true,
  width: 105
},
{
  key: 'nombre',
  name: 'Nombre',
  sortable : true,
  width: 220
},
{
  key: 'rut',
  name: 'Rut',
  sortable : true,
  width: 105
},
{
  key: 'rol',
  name: 'Rol',
  sortable : true,
  width: 110
},
{
  key: 'carrera',
  name: 'Carrera',
  sortable : true,
  width: 80
},
{
  key: 'asignatura',
  name: 'Asignatura',
  sortable : true,
  width: 150
},
{
  key: 'observacion',
  name: 'Observacion',
  width: 210,
  textAlign: 'left',
  sortable : true,
},
{
  key: 'hojas',
  name: 'Hojas',
  width: 80,
  sortable : true
},
{
  key: 'hojas1',
  name: 'Hojas',
  width: 80,
  sortable : true
}
]

export default class MedicionesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.mediciones,
    }
  }

  rowGetter(rowIdx){
    const aux ={
      fecha: 'prueba',
      rut: 'prueba',
      nombre: 'prueba',
      rol: 'prueba',
      carrera: 'prueba',
      asignatura: 'prueba',
      observacion: 'prueba',
      hojas: 'prueba',
      id: 'prueba',
      hojas1: 'prueba'
    }
    return aux;
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
    this.setState({rows : rows})
  }

  render() {
    return (
      <ReactDataGrid
        onGridSort={(a,b) => this.handleGridSort(a,b)}
        columns={columns}
        rowGetter={data => this.rowGetter(data)}
        rowsCount={this.state.rows.length}
        minHeight={450}
        onRowUpdated={data => this.handleRowUpdated(data)}
        isScrolling={false}
        defaultPageSize={10}
        showCellBorders= {true}
        paginationToolbarProps={{
          pageSizes: [
            10,
            50,
            100
          ]
        }}
      />
    )
  }
}

MedicionesList.propsTypes = {

}
