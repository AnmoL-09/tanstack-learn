import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { sampleProducts } from '../db/seed'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // This runs on server during SSR AND on client during navigation
    return { products: sampleProducts.slice(0, 3) }
  },
})

async function App() {
  const { products } = Route.useLoaderData()

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

      <section>
        <Card className="p-8 shadow-md bg-white/80">
          <div>
            <CardHeader className="px-0">
              <p
                className="text-xs font-semibold uppercase tracking-wide
              text-blue-700"
              >
                Recommended
              </p>
              <CardTitle
                className="text-xl font-semibold
              text-slate-900"
              >
                Starter picks from the catalog
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-slate-600">
              Curted items to try the cart and detail pages quickly.
            </CardDescription>
          </div>

          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2
              rounded-full border border-slate-200 px-4 py-2 text-xs
              font-semibold text-slate-700 sm:inline-flex
              transition hover:-translate-0.5 hover:shadow-xl"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={`product-${index}`}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
