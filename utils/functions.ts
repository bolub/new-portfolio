const sliceAndReturn = (textToSlice: string, limit: number) => {
  // basically if the text to slice is less than the limit, no need to slice
  if (textToSlice.length <= limit) {
    return textToSlice;
  }

  return `${textToSlice.slice(0, limit)}...`;
};

const readingTime = (text: string) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};
export { sliceAndReturn, readingTime };

export const getMediaType = (url: string) => {
  const fileExtension = url.split(".").pop()?.toLowerCase();

  if (fileExtension) {
    const videoExtensions = ["mp4", "avi", "mov", "wmv", "mkv", "webm"];

    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    }

    if (imageExtensions.includes(fileExtension)) {
      return "image";
    }
  }

  return null;
};
