"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfoDetails({ product }: Props) {

  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]
 
  const addToCart = () => {
    const item = {
      ...product
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`,
      description: `Product added to cart`,
      action: (
        <Link href="/cart">
          <Button variant='link' className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className='h-5 w-5' />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

      <div>
        <h3 className="text-2xl font-bold mb-4">Description</h3>
        <div>{product.description1}</div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div>{product.description2}</div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Features</h3>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">Sensing Ranges</h3>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {product.sensingRanges.map((range, index) => (
            <li key={index}>{range}</li>
          ))}
        </ul>
      </div>

      <div className="my-10">
        <h3 className="text-2xl font-bold">Applications</h3>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {product.applications.map((application, index) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}
