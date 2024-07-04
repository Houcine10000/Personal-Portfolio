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

export const MotionArr = [
  {
    initial: {
      x: -80,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 500,
        ease: "ease",
      },
    },
  },

  {
    initial: {
      x: -90,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 500,
        ease: "ease",
      },
    },
  },

  {
    initial: {
      x: -100,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 500,
        ease: "ease",
      },
    },
  },
];
