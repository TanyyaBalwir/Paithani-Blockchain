import { useState } from "react";

const input = {
  padding: "10px",
  width: "90%",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

function Register() {
  const [design, setDesign] = useState("");
  const [weaver, setWeaver] = useState("");
  const [location, setLocation] = useState("");

  const handleRegister = () => {
    console.log("Registered:", design, weaver, location);
    alert("Saree Registered (UI only)");
  };

  return (
    <div>
      <h2>Register Saree</h2>

      <input
  placeholder="Design"
  value={design}
  onChange={(e) => setDesign(e.target.value)}
  style={input}
/><br /><br />

<input
  placeholder="Weaver Name"
  value={weaver}
  onChange={(e) => setWeaver(e.target.value)}
  style={input}
/><br /><br />

<input
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  style={input}
/><br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;