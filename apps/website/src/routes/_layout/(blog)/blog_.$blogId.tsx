import { getArticleById } from '@/modules/blog/domain/articles-query'
import { createFileRoute } from '@tanstack/react-router'
import './blog_.css'

export const Route = createFileRoute('/_layout/(blog)/blog_/$blogId')({
  loader: ({ params }) => getArticleById(params.blogId),
  component: RouteComponent,
})

function RouteComponent() {
  const article = Route.useLoaderData()

  const tagColors = [
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-pink-600',
    'text-orange-600',
    'text-red-600',
    'text-indigo-600',
    'text-teal-600',
    'text-cyan-600',
    'text-yellow-600',
  ]

  const getTagColor = (index: number) => {
    return tagColors[index % tagColors.length]
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600 mb-4">{new Date(article.published_at).toLocaleDateString()}</div>

      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map((tag, index) => (
            <span
              key={tag}
              className={`${getTagColor(index)} font-semibold text-sm px-3 py-1 rounded-full bg-gray-100`}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="prose max-w-none" 
        dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  )
}
