import { useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([1920, 1080]);
  useEffect(() => {
      if (process.browser) {
          setSize([window.innerWidth, window.innerHeight]);
      }
      const handleResize = () => {
          setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", handleResize);
      return(() => {
          window.removeEventListener("resize", handleResize);
      })
  }, []);
  return size;
}