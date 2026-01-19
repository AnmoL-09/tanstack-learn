import { Link } from '@tanstack/react-router'
import { ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b
        border-gray-200 bg-white/80 backdrop-blur 
        dark:border-gray-800 dark:bg-slate-950/80"
    >
      <div
        className="mx-auto max-w-6xl px-4 py-3
        items-center justify-between flex"
      >
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center
            justify-center rounded-xl bg-slate-900 text-white
            dark:bg-white dark:text-slate-800"
            >
              <ShoppingBag size={20} />
            </div>

            <div className="flex flex-col">
              <span
                className="text-sm font-semibold
            text-slate-900 dark:text-white"
              >
                Start Shop
              </span>
            </div>
          </Link>

          <nav
            className=" hidden items-center gap-3 text-sm
        font-medium text-slate-700 dark:text-slate-200 sm:flex"
          >
            <Link
              to="/"
              className="rounded-lg px-3 py-1 transition
          hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="rounded-lg px-3 py-1 transition
          hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Products
            </Link>

            <Link to="/create-product">Create Product</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="inline-flex
                items-center gap-2 rounded-full text-xs border
                border-slate-200 bg-white
                px-4 py-2 font-semibold text-slate-800
                shadow-sm transition hover:translate-y-0.5
                hover:shadow-md"
          >
            <span>Cart</span>
            <span
              className="flex h-6 min-w-6 bg-slate-900
                     justify-center items-center rounded-full px-2 text-[11px]
                  font-bold text-white"
            >
              0
            </span>
            <span
              className="hidden text-[11px] font-medium
                  text-slate-500 sm:inline"
            >
              $10
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
