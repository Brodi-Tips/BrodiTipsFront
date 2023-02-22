import Image from "next/image";

export default function CopyBet() {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      Robô que copia entrada direto na
      <Image
        src="/images/bet365.png"
        height={20}
        width={20}
        alt="Bet365"
        style={{ marginLeft: 5, borderRadius: 5 }}
      />
    </span>
  );
}
