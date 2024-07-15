import Hero from "@/components/Hero";
import Products from "@/components/products";
import { Category } from "@/lib/types";
import { db } from "@/lib/data";
export default function Home() {
  const fullCatalouge:Category[] =db
  return <>
  <Hero />
  <Products mainData={fullCatalouge} />
  </>;
}
