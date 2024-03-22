import { Metadata } from "next";
import { ContentPreviewContainer } from "./components/ContentPreview";

export const metadata: Metadata = {
  title: "Content Preview",
};

export const revalidate = 1;

const ContentPreview = async () => {
  return <ContentPreviewContainer />;
};

export default ContentPreview;
