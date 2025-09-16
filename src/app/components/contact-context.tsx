"use client";
import React, { createContext, useContext, useState } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <ContactCtx.Provider value={{ open, setOpen }}>{children}</ContactCtx.Provider>;
}

export function useContact() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContact must be used inside ContactProvider");
  return ctx;
}
