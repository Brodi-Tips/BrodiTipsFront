import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";

import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import ShopSvg from "../../../icons/ShopSvg";
import classNames from "classnames";
import CopyBet from "../../../components/CopyBet";
import { fullCopyProduct } from "../../../products/fullCopyProduct";

export default function Home() {
  const onClick30Days = () =>
    window.open("https://buy.stripe.com/00g4kfaHk1i0bOo14i", "_blank");
  const onClick90Days = () =>
    window.open("https://buy.stripe.com/4gw2c7eXA8KscSscMY", "_blank");
  const onClickPremium = () =>
    window.open("https://buy.stripe.com/6oE6sncPsbWE4lWeV7", "_blank");

  const { prices30Days, prices90Days, prices180Days } = fullCopyProduct;

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
            fromText="De"
            toText="Por"
            period="por mês"
            periodSmall="por dia"
            textButton="Comprar"
            plus={[<CopyBet key={"copy"} />]}
            {...prices30Days}
          />
          <CardCheckout
            onClick={onClick90Days}
            imgSrc="/images/checkout/90-days.png"
            icon={<ShopSvg />}
            title="Fifa - 90 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="por 3 meses"
            periodSmall="por dia"
            isHighlight
            positionCard={1}
            textButton="Comprar AGORA!"
            plus={[<CopyBet key={"copy"} />]}
            {...prices90Days}
          />
          <CardCheckout
            onClick={onClickPremium}
            imgSrc="/images/checkout/premium.png"
            icon={<ShopSvg />}
            title="Fifa"
            titleHighlight="Premium"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="Por 6 meses"
            periodSmall="por dia"
            positionCard={2}
            textButton="Comprar"
            plus={[<CopyBet key={"copy"} />]}
            {...prices180Days}
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
