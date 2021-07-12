import React from "react";

// chakra
import { chakra, Text, Center } from "@chakra-ui/react";

// components
import CustomSeo from "../components/Layout/Seo";

// dayjs
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const TimeDisplay = () => {
  return (
    <>
      <CustomSeo
        title="Display Time"
        description="Display Time for different timezones"
      />

      <chakra.main minH={{ base: "100%", md: "80vh" }}>
        <Center flexDir="column" textAlign="center" h="40vh" w="100%">
          <chakra.p color="brand.500">
            Current{" "}
            <Text as="span" fontWeight="600" fontSize="18px">
              {" "}
              EST{" "}
            </Text>
            Time:
          </chakra.p>
          <chakra.h1 fontSize={{ base: "4xl", md: "5xl" }} fontWeight={700}>
            {dayjs(Date.now()).tz("EST").format("hh:mm:A")}
          </chakra.h1>
          {/* <chakra.p color="brand.500">in EST</chakra.p> */}
        </Center>

        <Center
          borderTopWidth="1px"
          flexDir="column"
          textAlign="center"
          h="40vh"
          w="100%"
        >
          <chakra.p color="brand.500">
            Current{" "}
            <Text as="span" fontWeight="600" fontSize="18px">
              {" "}
              Local
            </Text>{" "}
            Time:
          </chakra.p>
          <chakra.h1 fontSize={{ base: "4xl", md: "5xl" }} fontWeight={700}>
            {dayjs(Date.now()).format("hh:mm:A")}
          </chakra.h1>
          {/* <chakra.p color="brand.500">in EST</chakra.p> */}
        </Center>
      </chakra.main>
    </>
  );
};

export default TimeDisplay;
