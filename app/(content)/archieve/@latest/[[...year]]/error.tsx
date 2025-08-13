"use client";
import React from "react";

function error({ error }) {
  return (
    <div className="text-red-300">
      Unreachable resources
      <div>{error.message}</div>
    </div>
  );
}

export default error;
