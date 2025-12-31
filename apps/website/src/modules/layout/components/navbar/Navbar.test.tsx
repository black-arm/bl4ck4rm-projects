import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar, NavbarItem } from './Navbar';

const items: NavbarItem[] = [
  { type: 'link', label: 'Home', to: '/home' },
  { type: 'link', label: 'Blog', to: '/blog' },
  { type: 'anchor', label: 'LinkedIn', href: 'https://linkedin.com' },
  { type: 'anchor', label: 'GitHub', href: 'https://github.com' },
];

describe('Navbar', () => {
  it('renders all navigation items', () => {
    render(<Navbar items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders link items as Link components', () => {
    render(<Navbar items={items} />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('to', '/home');
    const blogLink = screen.getByText('Blog').closest('a');
    expect(blogLink).toHaveAttribute('to', '/blog');
  });

  it('renders anchor items with correct href and target', () => {
    render(<Navbar items={items} />);
    const linkedin = screen.getByText('LinkedIn').closest('a');
    expect(linkedin).toHaveAttribute('href', 'https://linkedin.com');
    expect(linkedin).toHaveAttribute('target', '_blank');
    const github = screen.getByText('GitHub').closest('a');
    expect(github).toHaveAttribute('href', 'https://github.com');
    expect(github).toHaveAttribute('target', '_blank');
  });
});
