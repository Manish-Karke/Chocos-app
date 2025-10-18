"use client";

import React from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/http/api";
import { Product } from "@/types";

const ProductPage = () => {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className=" text-2xl font-bold tracking-tighter">Products</h3>
        <button className="sm: border-b-amber-800 bg-slate-400 rounded-md ">
          Add Product
        </button>
      </div>
      <DataTable columns={columns} data={products || []} />
    </>
  );
};

export default ProductPage;
