// nextjs link
import Link from "next/link";
import { useRouter } from "next/router";

// chakra
import { chakra } from "@chakra-ui/react";

// recoil
import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";

const CustomLink = ({ href, children, active, fontSize, onClick }) => {
  const fontType = useRecoilValue(fontState);

  // next router initialization
  const { pathname } = useRouter();

  // looks obvious enough
  let isActive = active || pathname === href;
  return (
    <Link href={href} passHref>
      <chakra.a
        fontFamily={fontType.heading}
        borderBottom="1.3px solid"
        borderColor={isActive ? "brand.500" : "#c4c4c4"}
        color={isActive && "brand.500"}
        fontWeight={isActive && "600"}
        fontSize={fontSize}
        d="inline-flex"
        cursor="pointer"
        _hover={{
          backgroundColor: "brand.50",
          borderBottomColor: "brand.500",
          color: "brand.500",
        }}
        onClick={onClick}
      >
        {children}
      </chakra.a>
    </Link>
  );
};

export default CustomLink;
