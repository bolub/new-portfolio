// chakra
import { chakra } from "@chakra-ui/react";

// components
import UnderConstruction from "../components/Layout/UnderConstruction";
import CustomSeo from "../components/Layout/Seo";

const Cooking = () => {
  return (
    <>
      <CustomSeo title="Cooking" />

      <chakra.main>
        <UnderConstruction />
      </chakra.main>
    </>
  );
};

export default Cooking;
