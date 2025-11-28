import Navbar from "@/components/sections/navbar-component";

const navigationData = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "About Us",
    href: "#about-us",
  },
  {
    title: "Contacts",
    href: "#contacts",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar navigationData={navigationData} />
      {children}
    </>
  );
}
