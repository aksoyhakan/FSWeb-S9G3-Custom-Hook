import React, { useState } from "react";
import useLocalStorgeKullan from "./useLocalStorageKullan";

export default function useGeceMode() {
  if (!window.localStorage.geceMode)
    window.localStorage.setItem("geceMode", JSON.stringify(false));

  let currentValue = JSON.parse(window.localStorage.getItem("geceMode"));

  const { key } = useLocalStorgeKullan(currentValue);
  const [geceModeBoolean, setGeceModeBoolean] = useState(key);

  return { geceModeBoolean, setGeceModeBoolean };
}
