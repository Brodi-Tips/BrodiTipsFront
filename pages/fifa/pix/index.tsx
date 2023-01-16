import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";
import Image from "next/image";
import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import CopySvg from "../../../icons/CopySvg";

export default function Home() {
  const pix30Days =
    "00020101021126770014br.gov.bcb.pix0114422716900001630237Nao esqueca de adicionar seu telefone520400005303986540599.905802BR5915Viral Desenvolv6009FORTALEZA62130509FIFA30DAS630428EF";
  const pix90Days =
    "00020101021126770014br.gov.bcb.pix0114422716900001630237Nao esqueca de adicionar seu telefone5204000053039865406245.905802BR5915Viral Desenvolv6009FORTALEZA62140510FIFA90DIAS6304A13E";
  const pixInfinite =
    "00020101021126770014br.gov.bcb.pix0114422716900001630237Nao esqueca de adicionar seu telefone52040000530398654071999.995802BR5915Viral Desenvolv6009FORTALEZA62150511FIFAPREMIUM63041284";

  const onCopy30Days = () => navigator.clipboard.writeText(pix30Days);
  const onCopy90Days = () => navigator.clipboard.writeText(pix90Days);
  const onCopyInfinite = () => navigator.clipboard.writeText(pixInfinite);

  return (
    <>
      <Head>
        <title>Bródi Tips - PIX</title>
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
        <main className={stylesCheckout["main"]}>
          <CardCheckout
            onClick={onCopy30Days}
            imgSrc="/images/pix/30-days.png"
            icon={<CopySvg />}
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
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
          />
          <CardCheckout
            onClick={onCopy90Days}
            imgSrc="/images/pix/90-days.png"
            icon={<CopySvg />}
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
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
          />
          <CardCheckout
            onClick={onCopyInfinite}
            imgSrc="/images/pix/infinite.png"
            icon={<CopySvg />}
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
            period="por 3 meses"
            priceSmall="menos que um cafézinho"
            periodSmall="por dia"
            positionCard={2}
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
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
