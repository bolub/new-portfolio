import { ProjectTechnology } from "@/contentful/project/project";
import { VStack, chakra } from "@chakra-ui/react";

export const TechnologiesUsed = ({
  technologies,
}: {
  technologies: ProjectTechnology[];
}) => {
  return (
    <>
      <chakra.h2 fontSize="28px" fontWeight="bold">
        Technologies used
      </chakra.h2>

      <VStack align="start" spacing="18px" mt="30px">
        {technologies?.map((tech) => {
          return (
            <chakra.p key={tech.sys.id} fontSize="18px">
              <chakra.span fontWeight="semibold">
                {tech.fields.title}:
              </chakra.span>{" "}
              <chakra.span>{tech.fields.description}</chakra.span>
            </chakra.p>
          );
        })}
      </VStack>
    </>
  );
};
