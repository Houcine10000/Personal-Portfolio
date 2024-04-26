export const SlideBottom = {
  initial: {
    y: 100,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.2,
    },
  },

  leave: {
    y: 100,
    opacity: 0,
  },
};
