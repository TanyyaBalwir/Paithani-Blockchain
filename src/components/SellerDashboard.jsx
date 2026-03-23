import { useState } from "react";
import { getContracts } from "../utils/contract";

export default function SellerDashboard() {

  const [address, setAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [quality, setQuality] = useState("Mulberry");

  // ✅ Connect Wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      alert("Wallet Connected ✅");
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Transfer Silk Tokens (Seller → Weaver)
  const handleTransfer = async () => {
    try {
      const { silkContract } = await getContracts();

      await silkContract.transfer(address, weight);

      alert("✅ Silk Transferred Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Transaction Failed");
    }
  };

  // ✅ Create Saree (Register on Blockchain)
  const createSaree = async () => {
    try {
      const { ownershipContract } = await getContracts();

      await ownershipContract.createSaree(
        1,                // Saree ID
        "Paithan",        // Origin
        true,             // Pure Silk
        "QmHash123"       // IPFS Hash (dummy for now)
      );

      alert("✅ Saree Created Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create saree");
    }
  };

  return (
    <div className="p-5">
      <h2>🧵 Silk Seller Portal</h2>

      {/* Connect Wallet */}
      <button onClick={connectWallet}>Connect Wallet</button>

      <p>Wallet Connected via MetaMask</p>

      <h3>Total Silk Inventory: 500 KG</h3>

      <div>
        {/* Address Input */}
        <input
          placeholder="Weaver Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* Weight Input */}
        <input
          placeholder="Weight in KG"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        {/* Quality Dropdown */}
        <select onChange={(e) => setQuality(e.target.value)}>
          <option>Mulberry</option>
          <option>Pure Paithani</option>
        </select>

        {/* Transfer Silk */}
        <button onClick={handleTransfer}>
          Transfer Silk Credits
        </button>

        <br /><br />

        {/* Create Saree */}
        <button onClick={createSaree}>
          Create Saree
        </button>
      </div>
    </div>
  );
}