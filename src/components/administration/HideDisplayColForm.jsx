import React from 'react';

function HideDisplayColForm(props) {

  const onChangeHandler = (e) => {
    props.onChangeHandler(e.target.value);
  }

  return (
          props.activeColums.map((col) => {
            return (
              <div className="form-check" key={ col.id }>
                <input className="form-check-input" type="checkbox"
                    checked={ col.isActive } onChange={ onChangeHandler }
                    value={ col.column } id={ `defaultCheck-${col.column}` } />
                <label className="form-check-label" htmlFor={`defaultCheck-${col.column}`}>
                    { col.column }
                </label>
              </div>
            )
          })
  );
}


export default HideDisplayColForm;
