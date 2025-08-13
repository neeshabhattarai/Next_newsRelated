import React from "react";

export default function layout({ children, modal }: any) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
