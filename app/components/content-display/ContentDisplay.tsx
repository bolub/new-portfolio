import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { CodeSyntaxHighlighter } from "./CodeSyntaxHighlighter";

const options = {
  renderMark: {
    [MARKS.CODE]: (node: any) => {
      return <CodeSyntaxHighlighter node={node} />;
    },
  },
};

export const ContentDisplay = ({ data }: { data: any }) => {
  return <Prose>{documentToReactComponents(data, options)}</Prose>;
};
