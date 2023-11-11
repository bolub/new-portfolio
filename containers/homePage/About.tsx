import { chakra, Center, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomButton from "../../components/UI/CustomButton";
import SingleProject from "../projects/SingleProject";
import { ProjectItem } from "../../contentful/project/project";

const About = ({ projects }: { projects: ProjectItem[] }) => {
  return (
    <chakra.section
      px={generalPaddingX}
      id="projects"
      borderTopWidth={{ base: "1px", md: 0 }}
      mt={{ base: 6, md: 32 }}
      pt={{ base: 6, md: 0 }}
      display="flex"
      flexDir={"column"}
      maxW={maxi}
      mx="auto"
    >
      <Center flexDir="column" textAlign={"center"} maxW="900px" mx="auto">
        <chakra.h2
          mt={5}
          fontWeight="bold"
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          My Projects
        </chakra.h2>
      </Center>

      <SimpleGrid
        mt={{ base: 10, md: 20 }}
        spacing={16}
        columns={{ base: 1, md: 2 }}
      >
        {projects?.slice(0, 2)?.map((pd) => {
          return <SingleProject key={pd.sys.id} data={pd} />;
        })}
      </SimpleGrid>

      <Link passHref href="/projects">
        <CustomButton
          as={"a"}
          mt={24}
          h="60px"
          mx="auto"
          size="lg"
          variant="outline"
        >
          View All Projects
        </CustomButton>
      </Link>
    </chakra.section>
  );
};

export default About;
