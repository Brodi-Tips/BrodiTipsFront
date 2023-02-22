import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";

import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import ShopSvg from "../../../icons/ShopSvg";
import classNames from "classnames";

export default function Home() {
  const onClick30Days = () =>
    window.open("https://buy.stripe.com/3cs8Av02Gf8QdWwcMR", "_blank");
  const onClick90Days = () =>
    window.open("https://buy.stripe.com/cN28AveXAe4MbOo007", "_blank");
  const onClickInfinite = () =>
    window.open("https://buy.stripe.com/3cs03Z4iW8Ks5q08wC", "_blank");

  return (
    <>
      <Head>
        <title>Bródi Tips - Checkout</title>
      </Head>
      <div className={"checkout"}>
        <nav className={stylesCheckout["navigator"]}>
          <img
            className={styles.loading + " index"}
            width={80}
            height={80}
            src="/images/logo.png"
            alt="Bródi Tips"
          />
          <h1>Bródi Tips - Fifa 💚</h1>
        </nav>
        <div className={stylesCheckout["nav-fake"]}></div>
        <main className={classNames("main", stylesCheckout["main"])}>
          <CardCheckout
            onClick={onClick30Days}
            imgSrc="/images/checkout/30-days.png"
            icon={<ShopSvg />}
            title="Fifa - 30 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            price="99"
            priceCents=",99"
            fromText="De"
            fromPrice="244,99"
            toText="Por"
            discount="- 59%"
            period="por mês"
            priceSmall="3"
            priceSmallCents=",33"
            periodSmall="por dia"
            textButton="Pagar"
          />
          <CardCheckout
            onClick={onClick90Days}
            imgSrc="/images/checkout/90-days.png"
            icon={<ShopSvg />}
            title="Fifa - 90 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            price="245"
            priceCents=",90"
            fromText="De"
            fromPrice="699,99"
            toText="Por"
            discount="- 64%"
            period="por 3 meses"
            priceSmall="2"
            priceSmallCents=",73"
            periodSmall="por dia"
            isHighlight
            positionCard={1}
            plus={["7 dias grátis"]}
            textButton="Pagar"
          />
          <CardCheckout
            onClick={onClickInfinite}
            imgSrc="/images/checkout/infinite.png"
            icon={<ShopSvg />}
            title="Fifa - Infinite"
            titleHighlight="Premium"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            price="1999"
            priceCents=",99"
            fromText="De"
            fromPrice="3799.99"
            toText="Por"
            discount="- 47%"
            period="pela infinitude"
            priceSmall="menos que um cafézinho"
            periodSmall="por dia"
            positionCard={2}
            textButton="Pagar"
          />
        </main>
        <nav
          className={
            stylesCheckout["navigator"] +
            " " +
            stylesCheckout["nav-bottom"] +
            " " +
            " animate__animated animate__backInUp   animate__delay-1s"
          }
        >
          <div
            className={
              stylesHighlight.Badge +
              " " +
              stylesHighlight["is-highlightBadge"] +
              " " +
              stylesHighlight["is-highlightBadgeBig"] +
              " " +
              stylesHighlight.banner
            }
          >
            <span>
              Ao comprar hoje, você já poderá ter
              <span className={stylesCheckout.green}>&nbsp; greens</span>!
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
