import { Hero } from '@/modules/layout/components/hero/Hero'
import { Navbar, NavbarItem } from '@/modules/layout/components/navbar/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {

  const navbarItems: NavbarItem[] = [
    { type: 'link', label: 'Home', to: '/home' },
    { type: 'link', label: 'Blog', to: '/blog' },
    { type: 'anchor', label: 'LinkedIn', href: 'https://www.linkedin.com/in/antonio-basile-46a279114/' },
    { type: 'anchor', label: 'GitHub', href: 'https://github.com/black-arm' },
  ];

  const queryClient = new QueryClient()


  return <div className='px-60 pt-8 min-h-screen' >
    <Hero fullname="Antonio Basile" 
      photoUrl="https://avatars.githubusercontent.com/u/68558867?v=4" 
      jobDescription="Software Engineer in Italy"
    />
    <Navbar items={navbarItems} />
    <div className='mt-8'>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  </div>
}
