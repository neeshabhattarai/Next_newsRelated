"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ClientRouting() {
  const route = useRouter();
  return (
    <div className="text-xl text-red-400" onClick={route.back}>
      Intercepted
    </div>
  );
}

export default ClientRouting;
