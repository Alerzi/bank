"use client"
import {Sidebar, MobileNav} from "@/components"
import "@/css/layout.css"
import Image from "next/image"
import {close, bar} from "@/icons"
import react from "react"
import {usePathname} from "next/navigation"
import Cookie from "js-cookie"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: Cookie.get("firstname"), lastName: Cookie.get("lastname"), email: Cookie.get("email") };
  const [menu, setMenu] = react.useState(false);
  const [head, setHead] = react.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenu(!menu);
  }
  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <main className="main">
        { pathname !== "/verify" && <Sidebar user={loggedIn} /> }
        <div className="main-block">
          { 
            head && <div className="main-header">
                      <Image src={bar} width={30} height={30} alt="menu icon" className="main-menu" onClick={() => toggleMenu()} />
                      <div className={`main-mobile ${menu ? "" : "main-mobile-hide"} `}>
                        <div className="close-mobile" onClick={() => closeMenu()}>
                          <Image src={close} alt="close icon" width={10} height={10} />
                        </div>
                        <MobileNav user={loggedIn}/>
                      </div>
                    </div>
          }
          {children}
        </div>
    </main>
  );
}
