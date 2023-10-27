import { useEffect } from "react";

export function Media() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <h1>Media</h1>
    </>
  );
}