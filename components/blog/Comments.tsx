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
} from '@chakra-ui/react';

import { useState } from 'react';
import CustomToastBody from '../UI/CustomToastBody';
import { CustomPost } from '../../server/modules/post-service/interface';
import { trpc } from '../../utils/trpc';

const Comments = ({
  blogData,
  refetchPostData,
}: {
  blogData?: CustomPost | null;
  refetchPostData: () => void;
}) => {
  const toast = useToast();
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('Anonymous');

  const { mutate, isLoading } = trpc.comment.create.useMutation({
    onSuccess() {
      refetchPostData();

      toast({
        duration: 9000,
        isClosable: true,
        position: 'bottom-left',
        render: () => <CustomToastBody message='Message sent' toast={toast} />,
      });

      onClose();

      setMessage('');
    },
  });

  const sendMessage = async () => {
    if (!message) return;

    const dataToSend = {
      postId: blogData?.id || '',
      message,
      author,
    };

    mutate(dataToSend);
  };
  const allComments = blogData?.comments;

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
   <>
   {/* @ts-ignore */}
    <Flex flexDir='column' mt={6}>
      <Flex mb={5}>
        <chakra.h2 fontWeight='bold' mr={5}>
          💬 Comments({allComments?.length || 0})
        </chakra.h2>

        <Text
          onClick={onToggle}
          ml='auto'
          cursor='pointer'
          color='brand.500'
          fontWeight={600}
        >
          {isOpen ? '✖️ Cancel' : '➕ Add'}
        </Text>
      </Flex>

      {/* add comments */}
      <Collapse animateOpacity in={isOpen}>
        <Flex mb={20}>
          <Text mr={3} fontSize='xl'>
            😎
          </Text>

          <Flex flexDir='column' w='100%'>
            <Input
              variant='filled'
              borderRadius='none'
              placeholder='Bojack Horseman'
              _focus={{
                borderColor: 'brand.500',
                bg: 'gray.50',
              }}
              _hover={{
                bg: 'gray.100',
              }}
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <Textarea
              mt={1}
              variant='filled'
              placeholder='Start typing'
              borderRadius='none'
              rows={6}
              _focus={{
                borderColor: 'brand.500',
                bg: 'gray.50',
              }}
              _hover={{
                bg: 'gray.100',
              }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />

            <Button
              isLoading={isLoading}
              isDisabled={!message}
              onClick={sendMessage}
              ml='auto'
              colorScheme='brand'
              fontWeight='500'
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
            <Avatar mr={2} name={comment?.author} />

            <Box>
              <chakra.h3 fontSize='md' fontWeight='bold'>
                {comment?.author}
              </chakra.h3>
              <Text>{comment?.message}</Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
   </>
  );
};

export default Comments;
