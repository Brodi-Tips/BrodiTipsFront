import stylesCard from "./CardCheckout.module.css";
import stylesHighlight from "styles/Highlight.module.css";
import Image from "next/image";
import { ReactNode } from "react";
import cn from "classnames";

interface CardCheckoutProps {
  onClick?: () => void;
  description?: string;
  currency?: string;
  fromPrice?: string;
  fromText?: string;
  toText?: string;
  price?: string;
  priceCents?: string;
  priceSmall?: string;
  priceSmallCents?: string;
  periodSmall?: string;
  period?: string;
  discount?: string;
  title: string;
  titleHighlight?: string;
  imgSrc: string;
  icon: ReactNode;
  isHighlight?: boolean;
  positionCard?: number;
  plus?: string[];
  textButton?: string;
  textButtonClicked?: string;
}

const CardCheckout = ({
  onClick,
  currency,
  description,
  fromText,
  fromPrice,
  toText,
  price,
  priceCents,
  period,
  imgSrc,
  icon,
  title,
  discount,
  priceSmall,
  priceSmallCents,
  periodSmall,
  positionCard = 0,
  isHighlight,
  plus,
  titleHighlight,
  textButton,
  textButtonClicked = textButton,
}: CardCheckoutProps) => {
  return (
    <div
      className={cn(stylesCard.card, {
        [stylesCard["is-highlight"]]: isHighlight,
      })}
      style={{ animationDelay: `calc(${positionCard} * 0.2s)` }}
    >
      {isHighlight && (
        <div>
          <div
            className={stylesCard.Badge + " " + stylesCard["is-highlightBadge"]}
          >
            <span>Melhor negócio</span>
          </div>
        </div>
      )}
      <img
        className={stylesCard["product-img"]}
        width={150}
        height={150}
        src={imgSrc}
        alt={title}
      />
      <h2 className={stylesCard["product-name"]}>
        {title}
        {titleHighlight && (
          <span className={stylesCard.yellow}>&nbsp; {titleHighlight}</span>
        )}
      </h2>
      <p className={stylesCard["product-description"]}>{description}</p>
      <div className={stylesCard["product-box-price"]}>
        <span className={stylesCard.small + " " + stylesCard.magenta}>
          {fromText}:{" "}
        </span>
        <span className={stylesCard["product-from"] + " " + stylesCard.magenta}>
          {currency} {fromPrice}
        </span>
        <p
          className={
            stylesCard["no-margin-bottom"] +
            " " +
            stylesCard.medium +
            " " +
            stylesCard.green
          }
        >
          {toText}:
        </p>
        <span className={stylesCard["product-box-discount"]}>
          <p className={stylesCard["product-price"]}>
            <span className={stylesCard.small}>{currency} </span>
            {price}
            <span className={stylesCard.medium}>{priceCents}</span>
            <span className={stylesCard.small}>&nbsp; / {period}</span>
          </p>
          <span className={stylesCard["product-discount"]}>{discount}</span>
        </span>
      </div>
      <p className={stylesCard.faden + " " + stylesCard["product-description"]}>
        <span className={stylesCard.small}>{currency} </span>
        {priceSmall}
        <span className={stylesCard.small}>
          {priceSmallCents} / {periodSmall}
        </span>
      </p>
      <div className={stylesCard["product-box-button"]}>
        <button
          onClick={onClick}
          className={stylesCard["product-button"]}
          data-content={textButton}
          data-content-focused={textButtonClicked}
        >
          <span
            data-content={textButton}
            data-content-focused={textButtonClicked}
          ></span>
          {icon}
        </button>
      </div>
      {!!plus?.length && (
        <>
          <div
            className={
              stylesCard["product-description"] + " " + stylesCard.small
            }
          >
            {" "}
            Inclui:
          </div>
          <ul className={stylesCard["box-list"]}>
            {plus.map((item, index) => (
              <li key={index} className={stylesCard["list"]}>
                <i className={"fa fa-check"}></i>
                <span>&nbsp; {item}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CardCheckout;
