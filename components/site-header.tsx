"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChevronDown, Edit, SearchIcon, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') || ''
  const [isInputVisible, setIsInputVisible] = useState(false);

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const toggleDropdown = (dropdownName: string) => {
    switch (dropdownName) {
      case 'products':
        setShowProductsDropdown(!showProductsDropdown);
        break;
      case 'company':
        setShowCompanyDropdown(!showCompanyDropdown);
        break;
      case 'resources':
        setShowResourcesDropdown(!showResourcesDropdown);
        break;
      default:
        break;
    }
  }

  if (pathname.startsWith("/studio")) {
    return null
  }

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search");
    router.replace(`/shop?search=${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />

        <h1 className="cursor-pointer" onClick={() => router.push('/')}>Home</h1>
        <h1 className="cursor-pointer" onClick={() => router.push('/shop')}>Products</h1>
        <h1 className="cursor-pointer">
          <div
            className='relative'
            onMouseEnter={() => toggleDropdown('company')}
            onMouseLeave={() => toggleDropdown('company')}
          >
            <h1 className='flex cursor-pointer'>
              Compnay <ChevronDown />
            </h1>
            {showCompanyDropdown && (
              <div className="absolute top-full left-0 bg-sky-50 text-black rounded-md" style={{ whiteSpace: 'nowrap'}}>
                <p onClick={() => router.push('/company/about')} className="hover:bg-blue-400 hover:text-white cursor-pointer px-5 py-2 rounded-md">About Us</p>
                <p onClick={() => router.push('/company/reviews')} className="hover:bg-blue-400 hover:text-white cursor-pointer px-5 py-2 rounded-md">Client Reviews</p>
              </div>
            )}
          </div>
        </h1>
        <h1 className="cursor-pointer">
          <div
            className='relative'
            onMouseEnter={() => toggleDropdown('resources')}
            onMouseLeave={() => toggleDropdown('resources')}
          >
            <h1 className='flex cursor-pointer'>
              Resources <ChevronDown />
            </h1>
            {showResourcesDropdown && (
              <div className="absolute top-full left-0 bg-sky-50 text-black rounded-md" style={{ whiteSpace: 'nowrap'}}>
                <p onClick={() => router.push('/resources/guide')} className="hover:bg-blue-400 hover:text-white cursor-pointer px-5 py-2 rounded-md">Application & Software Guide</p>
                <p onClick={() => router.push('/resources/faqs')} className="hover:bg-blue-400 hover:text-white cursor-pointer px-5 py-2 rounded-md">FAQs</p>
              </div>
            )}
          </div>
        </h1>

        <div className="flex items-center space-x-1">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsInputVisible((prev) => !prev)}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {isInputVisible && ( 
            <form onClick={onSubmit} className="hidden items-center lg:inline-flex">
              <Input
                id="search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder="Search products..."
                className="h-9 lg:w-[300px]"
                defaultValue={defaultSearchQuery}
              />
              <Button size="sm" variant="ghost" className="hidden">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          )}

          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          {/* <ThemeToggle /> */}

          {process.env.NODE_ENV === "development" && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
      </div>
      </div>
    </header>
  );
}