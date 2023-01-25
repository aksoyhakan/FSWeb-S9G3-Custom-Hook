import React, { useState } from "react";

export default function useLocalStorgeKullan(currentValue) {
  const [key] = useState(currentValue);
  localStorage.setItem("geceMode", JSON.stringify(!currentValue));
  return { key };
}
