import type { Metadata } from "next";
export const metadata: Metadata = { title: "Orlando Trip Deals | CR AudioViz AI", description: "Best deals on Orlando theme parks and hotels. EIN 39-3646201." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body style={{margin:0,padding:0,background:"#040912"}}>{children}</body></html>;}