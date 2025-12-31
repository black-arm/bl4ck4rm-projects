import { Hero } from '@/modules/layout/components/hero/Hero'
import { Navbar, NavbarItem } from '@/modules/layout/components/navbar/Navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {

  const navbarItems: NavbarItem[] = [
    { type: 'link', label: 'Home', to: '/home' },
    { type: 'link', label: 'Blog', to: '/blog' },
    { type: 'anchor', label: 'LinkedIn', href: 'https://linkedin.com' },
    { type: 'anchor', label: 'GitHub', href: 'https://github.com' },
  ];

  return <div className='px-60 pt-8 min-h-screen' >
    <Hero fullname="Antonio Basile" 
      photoUrl="https://avatars.githubusercontent.com/u/68558867?v=4" />
    <Navbar items={navbarItems} />
    <Outlet />
  </div>
}
