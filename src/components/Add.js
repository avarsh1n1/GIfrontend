import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [msg, setMsg] = useState(null);
  const [gadget, setGadget] = useState({
    id: "",
    name: "",
    model: "",
    year: "",
  });

  const handlePost = async () => {
    try {
      const resp = await axios.post("https://gibackend-2.onrender.com/gadgets", gadget);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
      console.error(e);
    }
  };

  const styles = {
    container: {
      background: "#f4f7fa",
      height: "75vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "400px",
      textAlign: "center",
    },
    input: {
      width: "90%",
      margin: "8px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      background: "#007bff",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    },
    msg: { marginTop: "15px", color: "#333" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ color: "#007bff" }}>Add New Gadget</h1>
        <input
          type="number"
          style={styles.input}
          placeholder="Gadget ID"
          value={gadget.id}
          onChange={(e) => setGadget({ ...gadget, id: e.target.value })}
        />
        <input
          type="text"
          style={styles.input}
          placeholder="Gadget Name"
          value={gadget.name}
          onChange={(e) => setGadget({ ...gadget, name: e.target.value })}
        />
        <input
          type="text"
          style={styles.input}
          placeholder="Model"
          value={gadget.model}
          onChange={(e) => setGadget({ ...gadget, model: e.target.value })}
        />
        <input
          type="number"
          style={styles.input}
          placeholder="Year"
          value={gadget.year}
          onChange={(e) => setGadget({ ...gadget, year: e.target.value })}
        />
        <button style={styles.button} onClick={handlePost}>
          ➕ Add Gadget
        </button>
        {msg && <p style={styles.msg}>{msg}</p>}
      </div>
    </div>
  );
}

export default Add;
