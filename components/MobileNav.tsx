"use client"
import {Footer} from "@/components"
import {MobileNavProps} from "@/utils/types"
import Link from "next/link"
import Image from "next/image"
import {bank} from "@/icons"
import {sidebarLinks} from "@/utils/const"
import {usePathname} from "next/navigation"

const MobileNav = ({user}: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="navbar">
      <nav className="mobile-flex">
          <Link href="/" className="mobile-sidebar-link">
              <div className="mobile-sidebar-link-block">
                  <Image src={bank} width={20} height={20} alt="bank logo" className="link-image" />
                  <h1 className="sidebar-logo">Horizon</h1>
              </div>
          </Link>
          {
              sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); 
                  return (
                      <Link href={item.route} key={item.label} className={`sidebar-link ${isActive ? "sidebar-link-bg" : ""}`}>
                          <div className="mobile-sidebar-link-block">
                              <Image src={item.imgURL} alt={item.label} width={20} height={20}/>
                              {/* <p className={`sidebar-logo ${isActive ? "sidebar-logo-active" : ""}`}>{item.label}</p> */}
                          </div>
                      </Link>
                  )
              })
          }
          USER
      </nav>
    <Footer user={user} type="mobile"/>
    </section>
  )
}

export default MobileNav