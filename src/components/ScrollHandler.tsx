import Image from "./Image";

const ScrollHandler = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-handler__container" onClick={scrollToTop}>
      <Image type="computer-mouse" />
    </div>
  );
};

export default ScrollHandler;
