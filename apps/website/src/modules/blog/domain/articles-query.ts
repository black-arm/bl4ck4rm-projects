import { Endpoint } from "./endpoint";
import { useQuery } from "@tanstack/react-query";

export const useArticlesByUsernameQuery = (username: string) => {
  return useQuery({
    queryKey: ['articles', username],
    queryFn: async () => {
      const response = await fetch(Endpoint.getArticlesByUsername(username));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}