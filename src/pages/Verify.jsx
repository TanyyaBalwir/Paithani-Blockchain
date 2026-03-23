import { useState } from "react";

function Verify() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const input = {
    padding: "10px",
    width: "90%",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

  const handleVerify = () => {
    setResult({
      design: "Peacock Design",
      weaver: "Ramesh",
      location: "Yeola",
      owner: "0x123..."
    });
  };

  return (
    <div>
      <h2>Verify Saree</h2>

      <input
        placeholder="Enter Saree ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={input}
      /><br /><br />

      <button onClick={handleVerify}>Verify</button>

      {result && (
        <div>
          <h3>Saree Details:</h3>
          <p>Design: {result.design}</p>
          <p>Weaver: {result.weaver}</p>
          <p>Location: {result.location}</p>
          <p>Owner: {result.owner}</p>
        </div>
      )}
    </div>
  );
}

export default Verify;