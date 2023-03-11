import React from "react";
import styles from "./Card.module.scss";
export interface ICardProps {
  header: JSX.Element;
  footer: JSX.Element;
  body: JSX.Element;
}

const Card = (props: ICardProps) => {
  const { header, footer, body } = props;
  return (
    <div className={styles.card}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      {body && <div className={styles.cardBody}>{body}</div>}
      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
};

export default Card;
