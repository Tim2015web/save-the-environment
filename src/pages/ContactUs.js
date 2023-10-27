import { useEffect } from "react";

export function ContactUs() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <h1>Contact us</h1>
    </>
  );
}