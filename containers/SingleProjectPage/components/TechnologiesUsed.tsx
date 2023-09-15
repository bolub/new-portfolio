import { Box, VStack, chakra } from "@chakra-ui/react";
import { ProjectTechnologies } from "@prisma/client";

const dummyData: ProjectTechnologies[] = [
  {
    id: "1",
    title: "Nextjs",
    description: "as the fullstack react framework",
  },

  {
    id: "2",
    title: "Chakra UI",
    description:
      "as UI library. Basically because of its simplicity and numerous components",
  },
];

export const TechnologiesUsed = () => {
  return (
    <>
      <chakra.h2 fontSize="28px" fontWeight="bold">
        Technologies used
      </chakra.h2>

      <VStack align="start" spacing="18px" mt="30px">
        {dummyData.map((tech) => {
          return (
            <chakra.p key={tech.id} fontSize="18px">
              <chakra.span fontWeight="semibold">{tech.title}:</chakra.span>{" "}
              <chakra.span>{tech.description}</chakra.span>
            </chakra.p>
          );
        })}
      </VStack>
    </>
  );
};
