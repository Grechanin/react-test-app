import React from 'react';
import { connect } from "react-redux";
import { columnDisplayToggle, columnTextColorChange } from "../../redux/administration-reducer.js"
import HideDisplayColForm from '../../components/administration/HideDisplayColForm.jsx'
import ColorChangeForm from '../../components/administration/ColorChangeForm.jsx'

function Administration(props) {
  document.title = "Administration";

  const onHideDispColInpChangeHandler = (column) => {
    props.columnDisplayToggle(column);
  }

  const onSelectColorChangeHandler = (column, color) => {
    props.columnTextColorChange(column, color);
  }

  return (
    <div className="container d-flex</div>">
      <div className="row justify-content-md-center">
        <div className="col-md-6 mt-3">
          <h4>Choose your columns</h4>
          <HideDisplayColForm
            activeColums={ props.activeColums }
            onChangeHandler={ onHideDispColInpChangeHandler } />
        </div>
        <div className="col-md-6 mt-3">
          <h4>Select your columns text color</h4>
          <ColorChangeForm
            columsColors={ props.columsColors }
            onChangeHandler={ onSelectColorChangeHandler } />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeColums: state.administration.activeColums,
    columsColors: state.administration.columsColors
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        columnDisplayToggle: (column) => {
            dispatch(columnDisplayToggle(column));
        },
        columnTextColorChange: (column, color) => {
            dispatch(columnTextColorChange(column, color));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Administration);
