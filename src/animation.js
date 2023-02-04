const pageAnimate = {
  offScreen: { x: "-100", opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.2,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export default pageAnimate;
