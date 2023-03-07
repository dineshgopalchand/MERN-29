import React from "react";
import './Card.scss';
export interface ICardProps {
  header: JSX.Element;
  footer: JSX.Element;
  body: JSX.Element;
}

const Card = (props: ICardProps) => {
  const { header, footer, body } = props;
  return (
    <div className="c-card">
      {header && <div className="c-card-header">{header}</div>}
      {body && <div className="c-card-body">{body}</div>}
      {footer && <div className="c-card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
