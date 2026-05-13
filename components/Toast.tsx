"use client";

import { useContext } from "react";
import { ToastStateContext } from "./AppProviders";

export function Toast() {
  const { show, msg } = useContext(ToastStateContext);

  return (
    <div
      className={"toast" + (show ? " show" : "")}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="dot" />
      {msg}
    </div>
  );
}

export default Toast;
