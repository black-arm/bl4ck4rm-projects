import { createFileRoute } from '@tanstack/react-router'
import { User } from '@bl4ck4rm-projects/models'
import { Button } from '@bl4ck4rm-projects/ui-shared';

export const Route = createFileRoute('/')({ component: App })

function App() {
  const user: User = {
    firstname: 'Antonio',
    lastname: 'Basile',
    email: 'antonio@example.com'
  }

  return (
    <div>
      <h1>Antonio Basile</h1>
      <h1 className="text-4xl font-bold">{user.firstname} {user.lastname}</h1>
      <p>Email: {user.email}</p>
      <Button>Hello World</Button>
    </div>

  )
}
