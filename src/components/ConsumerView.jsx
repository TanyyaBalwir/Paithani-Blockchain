import { useEffect, useState } from "react";
import { getContracts } from "../utils/contract";

export default function ConsumerView() {
  const [data, setData] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Wallet Connected ✅");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const contract = await getContract();

    const result = await contract.viewer(1);

    setData(result);
  };

  return (
    <div className="p-5">
      <h2>🌟 100% Authentic Handloom Paithani</h2>

      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      <h3>Saree Journey</h3>
      <ul>
        <li>🟢 Raw Material Sourced</li>
        <li>🟢 Woven by: {data ? data.weaver : "Loading..."}</li>
        <li>🟢 Verified by: Soni Paithani</li>
      </ul>

      {data && (
        <>
          <p>Silk Type: {data.silkType}</p>
          <p>Location: {data.location}</p>
        </>
      )}

      <video width="300" controls>
        <source src="sample.mp4" type="video/mp4" />
      </video>

      <button>Claim Your NFT Certificate</button>
    </div>
  );
}