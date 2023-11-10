import React from "react";

// chakra
import {
  chakra,
  Text,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// recoil
import ChangeTheme from "./ChangeTheme";
import ChangeFont from "./ChangeFont";

const Playground = ({
  saving,
}: {
  saving: {
    start: boolean;
    loading: boolean;
    done: boolean;
  };
}) => {
  return (
    <>
      {saving.start && (
        <Center py={6}>
          <Text>
            💾{" "}
            <Text as="span" ml={2} fontWeight={600}>
              {saving.loading && "Saving changes"}
              {saving.done && "Saved successfully, refereshing page"}
            </Text>
            ...
          </Text>
        </Center>
      )}

      {!saving.start && (
        <>
          <Accordion allowMultiple>
            {/* change font */}
            <AccordionItem>
              <AccordionButton boxShadow="none" _focus={{ boxShadow: "none" }}>
                <Box display="flex" w="100%" textAlign="left">
                  <chakra.svg
                    w="22px"
                    h="22px"
                    mr={2}
                    my="auto"
                    viewBox="0 0 24 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 11.6653C0 12.3587 0.557336 12.9133 1.27648 12.9133C1.85179 12.9133 2.31924 12.6187 2.55296 12.0813L3.50582 9.932H9.36684L10.3017 11.9947C10.5714 12.5493 10.9849 12.9133 11.6142 12.9133C12.3513 12.9133 12.9266 12.3413 12.9266 11.6307C12.9266 11.4747 12.8727 11.3013 12.7828 11.0933L8.16228 1.05733C7.85664 0.381334 7.33526 0 6.56218 0H6.40037C5.6273 0 5.08794 0.381334 4.7823 1.05733L0.161807 11.0933C0.0719143 11.284 0 11.4747 0 11.6653ZM4.5306 7.57467L6.43633 3.224L8.34206 7.57467H4.5306Z"
                      fill="#A0AEC0"
                    ></path>
                    <path
                      d="M21.2673 4.472C20.5661 3.65733 19.6312 2.99867 18.103 2.99867C15.7299 2.99867 13.5365 4.784 13.5365 7.97333V8.008C13.5365 11.232 15.7658 13 18.103 13C19.6132 13 20.5661 12.3067 21.2673 11.388V11.596C21.2673 12.3413 21.8605 12.9133 22.6336 12.9133C23.4067 12.9133 24 12.3413 24 11.596V4.38533C24 3.64 23.4067 3.068 22.6336 3.068C21.8605 3.068 21.2673 3.65733 21.2673 4.368V4.472ZM18.7862 5.23467C20.1526 5.23467 21.3032 6.32667 21.3032 7.97333V8.008C21.3032 9.65467 20.1526 10.7467 18.7862 10.7467C17.4198 10.7467 16.2692 9.65467 16.2692 8.008V7.97333C16.2692 6.292 17.4198 5.23467 18.7862 5.23467Z"
                      fill="#A0AEC0"
                    ></path>
                  </chakra.svg>
                  Change Fonts
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <ChangeFont />
              </AccordionPanel>
            </AccordionItem>

            {/* change theme */}
            <AccordionItem>
              <AccordionButton boxShadow="none" _focus={{ boxShadow: "none" }}>
                <Box display="flex" w="100%" textAlign="left">
                  <Text as="span" my="auto" mr={2}>
                    🚝{" "}
                  </Text>
                  Change Theme
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <ChangeTheme />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </>
  );
};

export default Playground;
