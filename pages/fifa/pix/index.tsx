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
  const router = useRouter();

  const payPix = router.query?.payPix;

  const product = String(payPix?.at(0)).toUpperCase();
  const identificator = String(payPix?.at(1)).toUpperCase();

  const [pix, setPix] = useState({
    pix30Days: { key: "", base64: "" },
    pix90Days: { key: "", base64: "" },
    pixInfinite: { key: "", base64: "" },
  });

  const onCopy30Days = () => navigator.clipboard.writeText(pix.pix30Days.key);
  const onCopy90Days = () => navigator.clipboard.writeText(pix.pix90Days.key);
  const onCopyInfinite = () =>
    navigator.clipboard.writeText(pix.pixInfinite.key);

  const validateRoute = useCallback(() => {
    if (
      payPix?.length === 2 &&
      identificator.length > 0 &&
      product.length > 0
    ) {
      const re = /[^a-z0-9]/gi;
      if (re.test(identificator)) {
        const idRemovedSpecial = identificator.replace(/[^a-z0-9]/gi, "");

        router.push(`/${product}/${idRemovedSpecial}`);
      }
    }
  }, [identificator, payPix?.length, product, router]);

  const generatePixes = useCallback(async () => {
    if (payPix?.length === 2) {
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

      setPix({
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
    }
  }, [identificator, payPix?.length, product]);

  useEffect(() => {
    generatePixes();
  }, [generatePixes]);

  useEffect(() => {
    validateRoute();
  }, [validateRoute]);

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
