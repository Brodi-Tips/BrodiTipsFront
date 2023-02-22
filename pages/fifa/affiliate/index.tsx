import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";

import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import CopySvg from "../../../icons/CopySvg";
import { QrCodePix } from "qrcode-pix";
import { useCallback, useEffect, useState } from "react";
import slicePix from "../../../util/slicePix";
import { getPrices } from "../../../util/getPrices";
import { copy } from "../../../util/copy";

const Home = async () => {
  const product = "FIFA";
  const identificator = "PIX";

  const onCopy30Days = () => copy(pix.pix30Days.key);
  const onCopy90Days = () => copy(pix.pix90Days.key);
  const onCopyInfinite = () => copy(pix.pixInfinite.key);

  const basePrice = 244.99 * 3;

  const finalPrice30Days = 299.99;
  const finalPrice90Days = 750.99;
  const finalPrice180Days = 1699.99;

  const prices30Days = getPrices(basePrice, finalPrice30Days, 30);
  const prices90Days = getPrices(basePrice * 3, finalPrice90Days, 90);
  const prices180Days = getPrices(basePrice * 6, finalPrice180Days, 180);

  const generatePixes = useCallback(async () => {
    const defaultInfo = {
      version: "01",
      key: "04732019331",
      name: "JULIO CESAR FERREIRA LIMA",
      city: "FORTALEZA",
      message: "Não esqueça de adicionar seu telegram para validarmos...",
      cep: "60533662",
    };

    const qrCodePix30Days = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}30DIAS`),
      value: finalPrice30Days,
    });
    const qrCodePix90Days = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}90DIAS`),
      value: finalPrice90Days,
    });
    const qrCodePixInfinte = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}Infinite`),
      value: finalPrice180Days,
    });

    return {
      pix30Days: {
        key: qrCodePix30Days.payload(),
        base64: await qrCodePix30Days.base64(),
      },
      pix90Days: {
        key: qrCodePix90Days.payload(),
        base64: await qrCodePix90Days.base64(),
      },
      pixInfinite: {
        key: qrCodePixInfinte.payload(),
        base64: await qrCodePixInfinte.base64(),
      },
    };
  }, [identificator, product]);

  const pix = await generatePixes();

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
            imgSrc={pix.pix30Days.base64}
            icon={<CopySvg />}
            title="Fifa - 30 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="por mês"
            periodSmall="por dia"
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
            {...prices30Days}
          />
          <CardCheckout
            onClick={onCopy90Days}
            imgSrc={pix.pix90Days.base64}
            icon={<CopySvg />}
            title="Fifa - 90 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="por 3 meses"
            periodSmall="por dia"
            isHighlight
            positionCard={1}
            plus={["7 dias grátis"]}
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
            {...prices90Days}
          />
          <CardCheckout
            onClick={onCopyInfinite}
            imgSrc={pix.pixInfinite.base64}
            icon={<CopySvg />}
            title="Fifa - Infinite"
            titleHighlight="Premium"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="Por 6 meses"
            periodSmall="por dia"
            positionCard={2}
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
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
};

export default Home;
