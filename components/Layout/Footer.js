import React from 'react';

import { Text, chakra, Wrap, Box } from '@chakra-ui/react';
import { generalPaddingX, maxi } from '../../utils/chakra';
import Link from 'next/link';
import NavItems from './NavItems';

// icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <chakra.footer mt={20} borderTopWidth='1px' py={5} id='footer'>
      <Box
        d='flex'
        flexDir={{ base: 'column', md: 'row' }}
        px={generalPaddingX}
        maxW={maxi}
        mx='auto'
      >
        <Link passHref href='/'>
          <Text
            my={{ md: 'auto' }}
            cursor='pointer'
            fontWeight={900}
            fontSize='2xl'
            mr={{ md: 10 }}
          >
            😎
          </Text>
        </Link>

        {/* Navigation */}
        <Wrap
          flexDir={{ base: 'column', md: 'row' }}
          my={{ base: 5, md: 'auto' }}
          spacing={5}
          mr={{ md: 8 }}
        >
          <NavItems hide='contact' componentName='footer' />
        </Wrap>

        {/* Social */}
        <Wrap
          fontSize='2xl'
          color='brand.500'
          ml={{ md: 'auto' }}
          // mx={{ base: "auto", md: "" }}
          spacing={4}
          mt={{ base: 2, md: 0 }}
        >
          <chakra.a href='https://github.com/bolub/'>
            <AiFillGithub />
          </chakra.a>

          <chakra.a href='https://www.linkedin.com/in/abiola-boluwatife-2569a915b/'>
            <AiFillLinkedin />
          </chakra.a>

          <chakra.a href='https://twitter.com/boluwatifeabio1'>
            <AiFillTwitterCircle />
          </chakra.a>
          <chakra.a href='mailto:abiol5202@gmail.com'>
            <AiOutlineMail />
          </chakra.a>
          <chakra.a href='tel:2348130681705'>
            <AiOutlinePhone />
          </chakra.a>
        </Wrap>
      </Box>
    </chakra.footer>
  );
};

export default Footer;
