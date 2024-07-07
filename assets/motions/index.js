export const SlideBottom = {
  initial: {
    y: 100,
    opacity: 0,
  },

  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 800,
      ease: "ease",
    },
  },
};

export const SlideLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 600,
      ease: "ease",
    },
  },
};

export const SlideRight = {
  initial: {
    x: -200,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1200,
      ease: "ease",
    },
  },
};
