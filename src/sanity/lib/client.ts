import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
      })
    : null;
