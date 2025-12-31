import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the fullname and photo', () => {
    render(<Hero fullname="Antonio Basile" photoUrl="https://example.com/photo.jpg" />)

    expect(screen.getByText('Antonio Basile')).toBeInTheDocument()
    const img = screen.getByAltText('Antonio Basile')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg')
  })

  it('has flex Tailwind classes', () => {
    render(<Hero fullname="Test User" photoUrl="test.jpg" />)
    const container = screen.getByTestId('hero-container')
    expect(container).toHaveClass('flex')
  })
})