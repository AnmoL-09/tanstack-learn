import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getProductById } from '@/data/products'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return await getProductById(params.id)
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
          <CardTitle className="text-2xl font-semibold">
            {product?.name}
          </CardTitle>
          <CardDescription>{product?.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
