import { Box, Button } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

export const ProjectType = ({
  projectType,
}: {
  projectType: {
    label: string;
  };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedProjectType = searchParams.get("tab") || "All";

  const handleClick = (selected: string) => {
    router.push(`/projects?tab=${selected}`);
  };

  const isActive = projectType.label === selectedProjectType;

  return (
    <Box>
      <Button
        display={{ md: "none" }}
        size="sm"
        onClick={() => {
          handleClick(projectType.label);
        }}
        colorScheme="brand"
        variant={isActive ? "solid" : "ghost"}
      >
        {projectType.label}
      </Button>

      <Button
        display={{ base: "none", md: "inline-block" }}
        onClick={() => {
          handleClick(projectType.label);
        }}
        colorScheme="brand"
        variant={isActive ? "solid" : "ghost"}
      >
        {projectType.label}
      </Button>
    </Box>
  );
};
