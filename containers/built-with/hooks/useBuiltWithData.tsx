import React from "react";
import { trpc } from "../../../utils/trpc";

export const useBuiltWithData = () => {
  const { data } = trpc.builtWith.all.useQuery();

  const allFrontend = data?.filter((bd) => {
    return bd.tags[0].name.toLowerCase() === "frontend";
  });

  const allBackend = data?.filter((bd) => {
    return bd.tags.some((t) => t.name.toLowerCase() === "backend");
  });

  const allHosting = data?.filter((bd) => {
    return bd.tags[0].name.toLowerCase() === "hosting";
  });

  return {
    allFrontend,
    allBackend,
    allHosting,
  };
};
