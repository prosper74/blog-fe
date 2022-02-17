export const pageVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 75,
      duration: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
}

export const containerVariants = {
  exit: {
    x: "-100vw",
  },
  transition: { ease: "easeInOut", duration: 1 },
}

export const bannerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 0.5,
    },
  },
}

export const metaVariants = {
  catHidden: { x: -400 },
  dateHidden: { x: 400 },
  likeHidden: { x: 50 },
  visible: {
    x: 0,
    transition: { type: "spring", delay: 0.5, duration: 0.5 },
  },
}

export const contentVariants = {
  hidden: { y: 150, opacity: 0 },
  titleVisible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.6, duration: 0.6 },
  },
  bodyVisible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.8, duration: 0.6 },
  },
}

export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

export const socialButtonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}
