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

  visibleOnce: {
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
    x: 100,
    opacity: 0,
  },

  visibleOnce: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 600,
      ease: "ease",
    },
  },
};
