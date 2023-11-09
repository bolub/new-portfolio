import { NextSeo } from "next-seo";

const CustomSeo = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description?: string;
  imageUrl?: string;
}) => {
  const defaultDescription =
    "Welcome to my space. Find out all about me here, might get a little weird though";

  const url = window.location.href;

  return (
    <NextSeo
      title={title || "Boluwatife Abiola"}
      description={description || defaultDescription}
      openGraph={{
        url,
        title: "Open Graph Title",
        description: description || defaultDescription,
        images: [
          {
            url:
              imageUrl ||
              "https://res.cloudinary.com/bolub/image/upload/v1623527151/Og_Image_1.png",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url:
              imageUrl ||
              "https://res.cloudinary.com/bolub/image/upload/v1623527153/Og_Image_2.png",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
        ],
      }}
      twitter={{
        handle: "@BoluwatifeAbio1",
        site: "@BoluwatifeAbio1",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default CustomSeo;
