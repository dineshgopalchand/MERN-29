import React from "react";

const FormGroup = (props) => {
    const {children,className,...restProps}=props
  return (
    <div className={`form-group inline-form-block ${className} `} {...restProps}>{children} </div>
  );
};

export default FormGroup;
