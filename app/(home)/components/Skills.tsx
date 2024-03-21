"use client";

import { chakra, Center, Flex, Tag } from "@chakra-ui/react";
import { CustomContainer } from "@/app/components/CustomContainer";

const technologies = [
  "Typescript",
  "Nextjs",
  "React",
  "React Native",
  "Astro (Pending)",
  "Remix (Pending)",
  "TailwindCSS",
  "TRPC",
  "Storybook",
  "NPM Package Development",
  "Sanity",
  "Contentful",
  "GitHub Actions",
  "Supabase",
  "Prisma",
  "Jira",
  "Graphql",
];

export const Skills = () => {
  return (
    <chakra.section
      id="skills"
      mt={{ base: 6, md: 48 }}
      pt={{ base: 6, md: 0 }}
      display="flex"
      flexDir={"column"}
    >
      <CustomContainer>
        <Center flexDir="column" textAlign={"center"} maxW="900px" mx="auto">
          <chakra.h2
            mt={5}
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            My Skills
          </chakra.h2>

          <chakra.p mt={6} fontSize="lg">
            This list will get longer, I promise 👀 ...
          </chakra.p>

          <Flex
            mt={{ base: 10, md: 16 }}
            flexWrap="wrap"
            gap={5}
            textAlign="center"
            justifyContent="center"
          >
            {technologies.map((tech) => {
              return (
                <Tag key={tech} size="lg" rounded="full">
                  {tech}
                </Tag>
              );
            })}
          </Flex>
        </Center>
      </CustomContainer>
    </chakra.section>
  );
};
