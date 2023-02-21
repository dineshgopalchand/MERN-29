import React from 'react';
const FormControl=(props)=>{
    const {value,onChange:inputChangeHandler,...otherProps}=props;
    return (
        <input
        type="text"
        value={value}
        className="form-control"
        {...otherProps}
        onChange={inputChangeHandler}
      />
    )
}
export default FormControl;