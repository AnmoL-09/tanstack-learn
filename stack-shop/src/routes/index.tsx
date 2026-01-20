import { Card } from '@/components/ui/card'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div
      className="space-y-12 px-2 py-2 md:px-4 md:py-8 lg:px-8 lg:py-16
    items-center justify-center flex flex-col"
    >
      <Card className="inline-flex space-y-0.5 md:max-w-2xl px-4">
        <p className="text-blue-700 font-bold text-nm">
          YOUR FAVOURITE E-COMMERCE STORE
        </p>

        <h1 className="text-4xl font-bold ">Welcome to StartShop</h1>
        <p className="text-4xl font-bold ">
          Your one-stop shop for all your needs
        </p>

        <div className="px-4 py-2">
          <button
            className="inline-flex items-center gap-2
            bg-black text-white px-4 py-2 rounded-full font-semibold"
          >
            Browse products <ArrowRight size={16} />
          </button>
        </div>
      </Card>
    </div>
  )
}
