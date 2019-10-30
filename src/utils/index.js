export const checkForWord = text => {
  return /^\w+$/i.test(text);
};

export const getUserSelection = () => {
  if (window.getSelection) {
    return window.getSelection();
  }
  else if (document.selection) {
    return document.selection.createRange();
  }
  return null;
};
