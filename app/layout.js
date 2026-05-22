import "./globals.css";

export const metadata = {
  title: "Rom Padelkar Portfolio",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
