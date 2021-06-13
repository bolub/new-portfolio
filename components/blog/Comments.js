// chakra
import {
  Flex,
  Textarea,
  Text,
  Button,
  Avatar,
  Box,
  useDisclosure,
  chakra,
  useToast,
  Collapse,
  Input,
} from "@chakra-ui/react";

// axios
import axios from "axios";

// react
import { useState } from "react";
import CustomToastBody from "../UI/CustomToastBody";

const Comments = ({ blogData }) => {
  const toast = useToast();
  const [message, setMessage] = useState();
  const [author, setAuthor] = useState("Anonymous");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);

    const dataToSend = {
      // id: "string",
      blog_post: {
        ...blogData,
      },
      message,
      comment_owner: author,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments`,
        dataToSend
      );
      setLoading(false);
      setMessage();

      toast({
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
        render: () => <CustomToastBody message="Message sent" toast={toast} />,
      });

      setTimeout(() => {
        window.location.href = window.location;
      }, 2000);
    } catch (error) {
      setLoading(false);
      return null;
    }
  };
  const allComments = blogData?.comments;

  // open new comment transition
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex flexDir="column" mt={6}>
      <Flex mb={5}>
        <chakra.h2 fontWeight="bold" mr={5}>
          💬 Comments({allComments?.length || 0})
        </chakra.h2>

        <Text
          onClick={onToggle}
          ml="auto"
          cursor="pointer"
          color="brand.500"
          fontWeight={600}
        >
          {isOpen ? "✖️ Cancel" : "➕ Add"}
        </Text>
      </Flex>

      {/* add comments */}
      <Collapse animateOpacity in={isOpen}>
        <Flex mb={20}>
          <Text mr={3} fontSize="xl">
            😎
          </Text>

          <Flex flexDir="column" w="100%">
            <Input
              variant="filled"
              // borderBottomWidth="1.2px"
              // borderBottomColor="red.500"
              borderRadius="none"
              placeholder="Bojack Horseman"
              _focus={{
                borderColor: "brand.500",
                bg: "gray.50",
              }}
              _hover={{
                bg: "gray.100",
              }}
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <Textarea
              mt={1}
              variant="filled"
              placeholder="Start typing"
              borderRadius="none"
              rows="6"
              _focus={{
                borderColor: "brand.500",
                bg: "gray.50",
              }}
              _hover={{
                bg: "gray.100",
              }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />

            <Button
              isLoading={loading}
              isDisabled={!message}
              onClick={sendMessage}
              ml="auto"
              colorScheme="brand"
              fontWeight="500"
              mt={4}
            >
              Send Message
            </Button>
          </Flex>
        </Flex>
      </Collapse>

      {/* list comments */}
      {allComments?.map((comment) => {
        return (
          <Flex mb={8} key={comment?.id}>
            <Avatar mr={2} name={comment?.comment_owner} />

            <Box>
              <chakra.h3 fontSize="md" fontWeight="bold">
                {comment?.comment_owner}
              </chakra.h3>
              <Text>{comment?.message}</Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Comments;
