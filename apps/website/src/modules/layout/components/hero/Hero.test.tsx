import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Hero } from './Hero'

describe('Hero', () => {

  const heroProps = {
    fullname: 'Antonio Basile',
    photoUrl: 'https://example.com/photo.jpg',
    jobDescription: 'Fullstack Developer',
  }

  it('renders the fullname and photo', () => {
    render(<Hero {...heroProps} />)

    expect(screen.getByText('Antonio Basile')).toBeInTheDocument()
    const img = screen.getByAltText('Antonio Basile')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg')
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument()
  })

  it('has flex Tailwind classes', () => {
    render(<Hero {...heroProps} />)
    const container = screen.getByTestId('hero-container')
    expect(container).toHaveClass('flex')
  })
})