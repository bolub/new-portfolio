import { VStack, chakra } from "@chakra-ui/react";
import { ProjectTechnologies } from "@prisma/client";

export const TechnologiesUsed = ({
  technologies,
}: {
  technologies: ProjectTechnologies[];
}) => {
  return (
    <>
      <chakra.h2 fontSize="28px" fontWeight="bold">
        Technologies used
      </chakra.h2>

      <VStack align="start" spacing="18px" mt="30px">
        {technologies?.map((tech) => {
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
