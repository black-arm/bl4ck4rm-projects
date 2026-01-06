import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

// vi.mock('@tanstack/react-router', async () => {
//   const actual = await vi.importActual('@tanstack/react-router')
//   return {
//     ...actual,
//     useRouter: vi.fn(() => ({
//       navigate: vi.fn(),
//       state: { location: { pathname: '/' } },
//     })),
//     useRouterState: vi.fn(() => ({
//       location: { pathname: '/' },
//     })),
//     Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
//   }
// })