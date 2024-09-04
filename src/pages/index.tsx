import { CardanoWallet } from "@meshsdk/react";
import { useWallet } from "@meshsdk/react";

export default function Home() {
  const { connected, name, connecting, disconnect } = useWallet();

  return (
    <div>
      <h1>Kepoin Cardano</h1>
    </div>
  );
}
