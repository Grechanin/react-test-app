import React from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';



function UsersTable(props) {
  const onChangeHandler = (e) => {
    props.onCheckboxChange(e.target.value);
  }

  const columns = [{
    title: 'Name',
    field: 'name',
    hidden: !props.activeColums.find(col => col.column === 'name').isActive,
    render: rowData => <Link to={ `/users/${rowData.id}`} style={ {color: props.columsColors.find(col => col.column === 'name').color} }>{ rowData.name }</Link>
  }, {
    title: 'Surname',
    field: 'surname',
    cellStyle: {color: props.columsColors.find(col => col.column === 'surname').color },
    hidden: !props.activeColums.find(col => col.column === 'surname').isActive
  }, {
    title: 'Age',
    field: 'age',
    cellStyle: {color: props.columsColors.find(col => col.column === 'age').color },
    searchable: !props.activeUsers,
    sorting: !props.activeUsers,
    hidden: !props.activeColums.find(col => col.column === 'age').isActive,
    render: rowData => <span className='number'>{rowData.age}</span>
  },{
    title: 'Is Active',
    field: 'isActive',
    cellStyle: {color: props.columsColors.find(col => col.column === 'isActive').color },
    searchable: !props.activeUsers,
    sorting: !props.activeUsers,
    hidden: !props.activeColums.find(col => col.column === 'isActive').isActive,
    render: rowData => (
        <div className="form-check">
          <input className="form-check-input" type="checkbox"
            checked={ rowData.isActive } onChange={ onChangeHandler }
            value={ rowData.id } id={ `defaultCheck-${rowData.id}` } />
          <label className="form-check-label" htmlFor={`defaultCheck-${rowData.id}`}>
            { rowData.isActive ? "Active" : "Not Active" }
          </label>
        </div>
        )
  }]

  return (
      <MaterialTable
        data={ props.data } columns={ columns }
        title={ props.activeUsers ? "Active users list" : "All users list" }
      />
  )
}

export default UsersTable;
