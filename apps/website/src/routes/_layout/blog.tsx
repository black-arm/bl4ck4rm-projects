import { Button } from '@bl4ck4rm-projects/ui-shared'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Button color="secondary">Blog Page Button</Button>
  </div>
}
