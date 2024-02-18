import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useRegisterGSapScrollTrigger = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
};

export default useRegisterGSapScrollTrigger;
