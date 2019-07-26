import React from 'react';

function ColorChangeForm(props) {

  const onChangeHandler = (e) => {
    props.onChangeHandler(e.target.name, e.target.value);
  }

  return (
          props.columsColors.map((col) => {
            return (
              <div className="form-group" key={ col.id }>
                <label htmlFor={`color-${col.column}`}>Color for {col.column} column</label>
                <select className="form-control" name={col.column} id={`color-${col.column}`} defaultValue={col.color} onChange={ onChangeHandler } >
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="grey">Grey</option>
                </select>
              </div>)
          })
  );
}


export default ColorChangeForm;
