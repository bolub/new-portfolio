import { chakra } from "@chakra-ui/react";

import CustomSeo from "../components/Layout/Seo";
import Header from "../containers/homePage/Header";
import About from "../containers/homePage/About";
import { getLimitedProjects } from "../contentful/project/project";
import { InferGetStaticPropsType } from "next";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <CustomSeo title="Home" />

      <chakra.main>
        <Header />
        <About projects={props.projects} />
      </chakra.main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getLimitedProjects(2);

  return {
    props: {
      projects,
    },
  };
}
