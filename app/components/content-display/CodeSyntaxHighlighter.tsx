import { chakra, useColorModeValue } from "@chakra-ui/react";

import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { useEffect } from "react";

export const CodeSyntaxHighlighter = ({ node }: { node: any }) => {
  const highlightedCode = Prism.highlight(
    node,
    Prism.languages["javascript"],
    "javascript"
  );

  const bg = useColorModeValue("gray.900 !important", "");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <chakra.pre
      bgColor={bg}
      className={`language-javascript`}
      borderWidth="1px"
      fontSize="sm !important"
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </chakra.pre>
  );
};
