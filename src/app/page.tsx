"use client";
import { Landing } from "./components/pages/Landing";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Landing/>
    </div>
  );
}
