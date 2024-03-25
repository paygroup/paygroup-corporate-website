import { createClient } from "../genql-sdk";


export const genql = createClient({
    url: process.env.NEXT_PUBLIC_PAYGROUP_GRAPHQL_URL,
    headers: {
      "X-Hasura-Admin-Secret": process.env.NEXT_PUBLIC_PAYGROUP_HASURA_ADMIN!,
      "X-Hasura-Role": "admin",
    },
    // subscription: {
    //   url: process.env.NEXT_PUBLIC_PAYGROUP_GRAPHQL_URL!.replace("https", "wss"),
    //   headers: {
    //     "X-Hasura-Admin-Secret": process.env.NEXT_PUBLIC_PAYGROUP_HASURA_ADMIN!,
    //     "X-Hasura-Role": "admin",
    //   } as any,
    // },
  });