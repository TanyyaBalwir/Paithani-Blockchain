import { useState } from "react";

function Transfer() {
  const [id, setId] = useState("");
  const [newOwner, setNewOwner] = useState("");

  const handleTransfer = () => {
    console.log("Transfer:", id, newOwner);
    alert("Ownership Transferred (UI only)");
  };

  const input = {
    padding: "10px",
    width: "90%",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

  return (
    <div>
      <h2>Transfer Ownership</h2>

      <input
        placeholder="Saree ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={input}
      /><br /><br />

      <input
        placeholder="New Owner Address"
        value={newOwner}
        onChange={(e) => setNewOwner(e.target.value)}
        style={input}
      /><br /><br />

      <button onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;