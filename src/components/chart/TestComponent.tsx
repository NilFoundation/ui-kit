import { useCallback, useEffect, useState } from "react";
import ChartWrapper from "./ChartWrapper";

export const TestComponent = () => {
  const [f, setF] = useState(0);
  const onClick = useCallback(() => {
    console.log(f);
  }, [f]);
  useEffect(() => {
    const id = setInterval(() => {
      setF((f) => f + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ height: "600px", width: "90%" }}>
      <ChartWrapper onClick={onClick} />
    </div>
  );
};
