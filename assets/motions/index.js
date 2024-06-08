export const SlideBottom = {
  initial: {
    y: 150,
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
      duration: 800,
    },
  },

  leave: {
    y: 10,
    opacity: 0,
    transition: {
      stiffness: 100,
      ease: "easeInOut",
    },
  },
};
