const sliceAndReturn = (textToSlice, limit) => {
  // basically if the text to slice is less than the limit, no need to slice
  if (textToSlice.length <= limit) {
    return textToSlice;
  }

  return `${textToSlice.slice(0, limit)}...`;
};

const readingTime = (text) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};
export { sliceAndReturn, readingTime };
