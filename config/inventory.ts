import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  features: string[]
  sensingRanges: string[]
  applications: string[]
  description: string
  description1: string
  description2: string
  price: number
  currency: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "smart_energy_monitoring_device_1",
    name: "Smart Energy Monitoring Device",
    description: 'Our Smart Energy Meters are low-cost, non - invasive / invasive , indigenous designed plug and play IoT-based three phase smart AC energy meters. Smart AC Energy Meter captures 12 essential parameters of AC Power for each phase and transmits it wirelessly to the central cloud.',
    price: 46550, 
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    features: ["Acoustic Signatures Detection"],
    sensingRanges: ["bags"],
    applications: ["brown"],
    description1: 'asasas',
    description2: 'asasasasasasas',
    currency: "USD",
  },
  {
    id: "392167ff-2199-4211-b5d4-68a47729c1f9",
    sku: "agri_farm_multi_meter_1",
    name: "Agri Farm Multi Meter",
    description: `In agriculture, timely usage of water maintains the health of crops. Delayed Irrigation leads to loss of nutrition of crops and overly? early irrigation saturates land which leads to various fungal and algae disease attacks on crops and plants`,
    price: 46800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    features: ["one-size"],
    sensingRanges: ["bags"],
    applications: ["brown"],
    description1: 'asasas',
    description2: 'asasasasasasas',
    currency: "USD",
  },
  {
    id: "392167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "sense_ball_1",
    name: "Sense Ball",
    description: `“Sense ball” is small, battery powered device that can provide you with storage monitoring features like inside temperature, humidity, light intensity and gas emissions beside GPS tracker to monitor real time supply chain. `,
    price: 36800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    features: ["one-size"],
    sensingRanges: ["bags"],
    applications: ["brown"],
    description1: 'asasas',
    description2: 'asasasasasasas',
    currency: "USD",
  }
]
