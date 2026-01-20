import { Card } from '@/components/ui/card'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // This runs on server during SSR AND on client during navigation
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log('--server data--', data)
    return { products: data[0] }
  },
})

function App() {
  const { products } = Route.useLoaderData()

  console.log('--client products-->', products)
  return (
    <div
      className="space-y-12 px-2 py-2 md:px-4 md:py-8 lg:px-8 lg:py-16
     flex flex-col
    bg-linear-to-b from-slate-50 via-white to-slate-50
    p-6"
    >
      <section>
        <Card
          className="space-y-1 md:max-w-6xl
        pl-4 pr-6"
        >
          <p className="text-blue-700 font-bold text-nm">
            YOUR FAVOURITE E-COMMERCE STORE
          </p>
          <div>
            <h1 className="text-4xl font-bold max-w-6xl">
              Welcome to StartShop,
            </h1>
            <p className="text-4xl font-bold max-w-6xl">
              Your one-stop shop for all your needs
            </p>
          </div>

          <Link to="/products" className="px-4 py-2">
            <button
              className="inline-flex items-center gap-2
              bg-black text-white px-4 py-2 rounded-full
              font-semibold shadow-lg transition hover:-translate-y-0.5
              hover:shadow-xl cursor-pointer"
            >
              Browse products <ArrowRight size={16} />
            </button>
          </Link>
        </Card>
      </section>
    </div>
  )
}
