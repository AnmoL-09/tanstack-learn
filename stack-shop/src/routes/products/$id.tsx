import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getProductById } from '@/data/products.server'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return await getProductById({ data: params.id })
  },
})

function RouteComponent() {
  const { id } = Route.useParams()
  const product = Route.useLoaderData()

  return (
    <div>
      <Card>
        <CardHeader>
          <Link
            to="/products"
            className="inline-flex items-center gap-2
          text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ArrowLeftIcon size={16} />
            Back to products
          </Link>
          <CardHeader className="flex items-center gap-2">
            <CardTitle className="text-2xl font-semibold">
              <h1 className="text-2xl font-semibold">{product?.name}</h1>
            </CardTitle>
            <div className="flex items-center gap-2">
              {product?.badge && (
                <span
                  className="rounded-full bg-slate-900 px-2 py-0.5
                      text-xs font-semibold text-white"
                >
                  {product.badge}
                </span>
              )}
            </div>
            <CardDescription className="text-lg">
              {product?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">${product?.price}</p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}
