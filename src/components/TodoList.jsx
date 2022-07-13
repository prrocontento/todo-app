import React from "react";

export function TodoList(props) {
  return (
    <section style={{ width: "100%" }}>
      <ul style={{ listStyleType: "none", padding: 0, width: "100%" }}>
        {props.children}
      </ul>
    </section>
  );
}
