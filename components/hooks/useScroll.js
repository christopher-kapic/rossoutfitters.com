import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState([0,0]);
  console.log(scroll)
  useEffect(() => {
      if (process.browser) {
          setScroll([window.scrollX, window.scrollY]);
      }
      const handleScroll = () => {
          setScroll([window.scrollX, window.scrollY]);
      }
      window.addEventListener("scroll", handleScroll);
      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  }, []);
  return scroll;
}