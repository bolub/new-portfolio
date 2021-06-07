const sliceAndReturn = (textToSlice, limit) => {
  // basically if the text to slice is less than the limit, no need to slice
  if (textToSlice.length <= limit) {
    return textToSlice;
  }

  return `${textToSlice.slice(0, limit)}...`;
};

export { sliceAndReturn };
