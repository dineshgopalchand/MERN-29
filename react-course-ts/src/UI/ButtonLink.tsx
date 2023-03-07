import React from "react";
import classes from './ButtonLink.module.scss';

const ButtonLink = ({ children, className, href, ...restProps }: any) => {
  return (
    <a href={href} {...restProps} className={`${classes.linkButton} ${className}`}>
    {/* <a href={href} {...restProps} className={`${classes['link-button']} ${className}`}> */}
      {children}
    </a>
  );
};

export default ButtonLink;
