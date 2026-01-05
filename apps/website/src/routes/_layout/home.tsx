import AboutMe from '@/modules/home/components/aboutMe/aboutMe'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <AboutMe />
}
