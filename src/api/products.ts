import z from 'zod';

const API_URL = import.meta.env.VITE_API_URL;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
  id: z.coerce.number().int(),
  name: z.string().min(1, "Required"),
  slug: z
      .string()
      .min(1, "Required")
      .regex(/^[a-zA-Z0-9-_]+$/, "Slug must ure only Latin letters, numbers, - or _"),
  description: z.string().optional(),
  image: z.string().url("Must be valid URL").optional(),
  price: z.coerce.number().nonnegative("Must be greater than 0"),
  sort: z.coerce.number().int(),
  is_active: z.boolean(),
  is_favorite: z.boolean(),
  category: z.coerce.number().int().min(1, "Category is Required"),
})

export type ProductType = z.infer<typeof productSchema>;


export async function getProducts(): Promise<ProductType[]> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  console.log(data);
  return data;
}

// export async function getProduct(id: number): Promise<ProductType> {
//   const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`);
//   if (!res.ok) throw new Error("Failed to fetch tenant");
//   return await res.json();
// }

export async function updateProduct(id: number, data:{
  name: string;
  slug: string;
  description?: string | undefined;
  image?: string | undefined;
  price: number,
  is_active: boolean,
  is_favorite: boolean,
  sort: number,}
): Promise<ProductType> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {method: 'PUT',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return await res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {method: 'DELETE',});
  if (!res.ok) throw new Error("Failed to delete product");
}

