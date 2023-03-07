const itemChildren = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: { y: 20, opacity: 0 },
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 0.3,
    },
  },
  dismont: {
    opacity: 0,
  },
};
export { itemChildren, container };
