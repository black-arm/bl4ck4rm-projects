import { Articles } from '../models/article.model'
import { ArticleDetail } from '../models/article-detail.model'
import { Endpoint } from './endpoint'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useArticlesByUsernameQuery = (username: string): UseQueryResult<Articles, Error> => {
  return useQuery({
    queryKey: ['articles', username],
    queryFn: async () => {
      const response = await fetch(Endpoint.getArticlesByUsername(username))
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json() as Promise<Articles>
    },
  })
}

export const getArticleById = async (id: string): Promise<ArticleDetail> => {
  const response = await fetch(Endpoint.getArticleById(id))

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json() as Promise<ArticleDetail>
}

export const useGetArticleById = (id: string): UseQueryResult<ArticleDetail, Error> => {
  return useQuery({
    queryKey: ['queryId', id],
    queryFn: async () => {
      const response = await fetch(Endpoint.getArticleById(id))

      if (!response.ok) {
        throw new Error('Network respon was not ok')
      }

      return response.json() as Promise<ArticleDetail>
    },
  })
}
