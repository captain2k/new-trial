export const handleScrollIntoView = (elementId: string): void => {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
};
