// src/routes/index.tsx
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    throw redirect({
      to: '/home',
      replace: true, // Non aggiunge alla history del browser
    })
  },
})