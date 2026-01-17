import { BlogsListContainer } from '@/modules/blog/container/blogs-list-container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/blog')({
  component: RouteComponent,
})

function RouteComponent() {

  return <div className='p-4 mb-8'>
    <BlogsListContainer />
  </div>
}
