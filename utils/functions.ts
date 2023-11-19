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
