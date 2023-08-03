import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: "skGbWJpx4QpFdITD8hKjiFO4Pt6zQdjKE9ZmptDs9VCrXmvzWbo4Ud2dHsbYlMx5NyC5KRBJpTJ4VwaEqHQ1p95IZcvku0zbBXn0vIJfibpiw4DiooUN3kAP6S9k1HtrX1VeyyVvXvzUFqy07ftk3oEZq11k1hDAyMFscDfqUwoXQr156ZMc"
})
