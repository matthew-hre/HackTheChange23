import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cal Pal",
  description: "Your AI Calendaring Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black font-sans min-h-screen flex flex-col items-center">
        <main className="bg-background1 w-full h-[100dvh] sm:w-fit sm:aspect-[9/16] sm:h-[100dvh] overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
