import Link from "next/link";
import { useRouter } from "next/router";

import { chakra } from "@chakra-ui/react";

import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";
import { ReactNode } from "react";

const CustomLink = ({
  href,
  children,
  active,
  fontSize,
  onClick,
  display,
  isExternal,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  fontSize?: string | number | object;
  onClick?: () => void;
  display?: any;
  isExternal?: boolean;
}) => {
  const fontType = useRecoilValue(fontState);
  const { pathname } = useRouter();
  let isActive = active || pathname === href;

  return (
    <Link href={href} passHref>
      <chakra.a
        href={href}
        fontFamily={fontType.heading}
        borderBottom="1.3px solid"
        borderColor={isActive ? "brand.500" : "#c4c4c4"}
        color={isActive ? "brand.500" : ""}
        fontWeight={isActive ? "600" : ""}
        fontSize={fontSize}
        display={display || "inline-flex"}
        cursor="pointer"
        _hover={{
          backgroundColor: "brand.50",
          borderBottomColor: "brand.500",
          color: "brand.500",
        }}
        onClick={onClick}
        target={isExternal ? "__blank" : ""}
      >
        {children}
      </chakra.a>
    </Link>
  );
};

export default CustomLink;
