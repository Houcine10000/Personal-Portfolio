export const SlideBottom = {
  initial: {
    y: -10,
    opacity: 0,
    transition: {
      stiffness: 100,
    },
  },

  enter: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      ease: "easeInOut",
    },
  },

  leave: {
    y: -10,
    opacity: 0,
    transition: {
      stiffness: 100,
    },
  },
};
