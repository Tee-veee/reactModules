import React, { useEffect } from "react";

export default function Alert({ type, message, removeAlert, list }) {
  useEffect(() => {
    console.log(removeAlert);
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
}
