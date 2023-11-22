"use client";

import { chakra } from "@chakra-ui/react";
import { CustomContainer } from "@/app/components/CustomContainer";
import { ReactNode } from "react";

export const ProjectsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <chakra.section id="projects">
      <CustomContainer>
        <chakra.div py={{ base: "10" }}>{children}</chakra.div>
      </CustomContainer>
    </chakra.section>
  );
};
