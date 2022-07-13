import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export function MessagePopup(props) {
  return (
    <div
      style={{
        background: "rgba(32,35,41,.9)",
        height: "100vh",
        position: "fixed",
        top: "-10px",
        left: "-10px",
        right: "-10px",
        bottom: "-10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={props.onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "60%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Enhorabuena!
        <br /> No hay tareas pendientes 🤌 🫳 <br /> Comienza a crear más...{" "}
        <br />
        <br /> ✨Solo haz click en New Task✨
      </div>
    </div>
  );
}
