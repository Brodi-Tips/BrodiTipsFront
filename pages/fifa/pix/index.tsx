import { useRouter } from "next/router";
import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";

import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import CopySvg from "../../../icons/CopySvg";
import { QrCodePix } from "qrcode-pix";
import { useCallback, useEffect, useState } from "react";
import slicePix from "../../../util/slicePix";

export default function Home() {
  const product = "FIFA";
  const identificator = "PIX";

  const pix = {
    pix30Days: {
      key: "00020126960014BR.GOV.BCB.PIX0114422716900001630256Não esqueça de adicionar seu telegram para validarmos...520400005303986540599.995802BR5925VIRAL DESENVOLVIMENTO & T6009FORTALEZA61086053366262170513PIXFIFA30DIAS6304EE71",
      base64:
        "data:image/png;base64,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",
    },
    pix90Days: {
      key: "00020126960014BR.GOV.BCB.PIX0114422716900001630256Não esqueça de adicionar seu telegram para validarmos...5204000053039865406245.905802BR5925VIRAL DESENVOLVIMENTO & T6009FORTALEZA61086053366262170513PIXFIFA90DIAS630416AB",
      base64:
        "data:image/png;base64,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",
    },
    pixInfinite: {
      key: "00020126960014BR.GOV.BCB.PIX0114422716900001630256Não esqueça de adicionar seu telegram para validarmos...52040000530398654071999.995802BR5925VIRAL DESENVOLVIMENTO & T6009FORTALEZA61086053366262190515PIXFIFAInfinite6304339B",
      base64:
        "data:image/png;base64,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",
    },
  };

  const onCopy30Days = () => navigator.clipboard.writeText(pix.pix30Days.key);
  const onCopy90Days = () => navigator.clipboard.writeText(pix.pix90Days.key);
  const onCopyInfinite = () =>
    navigator.clipboard.writeText(pix.pixInfinite.key);

  const generatePixes = useCallback(async () => {
    const defaultInfo = {
      version: "01",
      key: "42271690000163",
      name: "VIRAL DESENVOLVIMENTO & TECNOLOGIA LTDA",
      city: "FORTALEZA",
      message: "Não esqueça de adicionar seu telegram para validarmos...",
      cep: "60533662",
    };

    const qrCodePix30Days = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}30DIAS`),
      value: 99.99,
    });
    const qrCodePix90Days = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}90DIAS`),
      value: 245.9,
    });
    const qrCodePixInfinte = QrCodePix({
      ...defaultInfo,
      transactionId: slicePix(`${identificator}${product}Infinite`),
      value: 1999.99,
    });

    console.log({
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
    });
  }, [identificator, product]);

  useEffect(() => {
    generatePixes();
  }, [generatePixes]);

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
            imgSrc={pix.pix90Days.base64}
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
            imgSrc={pix.pixInfinite.base64}
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
            period="pela infinitude"
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
