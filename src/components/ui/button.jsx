import React from "react";

export function Button({ children, variant = "default" }) {
  const base = "px-4 py-2 rounded font-medium";
  const styles = variant === "outline"
    ? "border border-black text-black"
    : "bg-black text-white";
  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}