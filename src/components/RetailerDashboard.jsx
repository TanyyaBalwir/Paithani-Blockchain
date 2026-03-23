import { getContracts } from "../utils/contract";

export default function RetailerDashboard() {

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Wallet Connected ✅");
    }
  };

  const getHistory = async () => {
    const contract = await getContract();

    const history = await contract.ownershipHistoryFunc(1);

    console.log(history);
    alert("Check console for ownership history");
  };

  const approveNFT = async () => {
    const contract = await getContract();

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const retailerAddress = accounts[0];

    await contract.transfer(retailerAddress, 1);

    alert("✅ Saree Verified & Ownership Transferred");
  };

  return (
    <div className="p-5">
      <h2>🏪 Retailer Dashboard</h2>

      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      <button>Scan QR Code</button>

      <h3>Verification</h3>
      <p>✅ Silk from Certified Seller</p>
      <p>✅ GI Tag Verified (Yeola)</p>

      <video width="300" controls>
        <source src="sample.mp4" type="video/mp4" />
      </video>

      <button onClick={getHistory}>
        Check Ownership
      </button>

      <button onClick={approveNFT}>
        Approve & Co-Sign NFT
      </button>
    </div>
  );
}