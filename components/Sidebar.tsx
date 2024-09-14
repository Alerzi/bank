"use client"
import {SiderbarProps} from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import {bank} from "@/icons"
import {sidebarLinks} from "@/utils/const"
import "@/css/sidebar.css"
import {usePathname} from "next/navigation"
import {Footer} from "@/components"

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex">
                <Link href="/" className="sidebar-link">
                    <div className="sidebar-link-block">
                        <Image src={bank} width={34} height={34} alt="bank logo" className="link-image" />
                        <h1 className="sidebar-logo">Horizon</h1>
                    </div>
                </Link>
                {
                    sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); 
                        return (
                            <Link href={item.route} key={item.label} className={`sidebar-link ${isActive ? "sidebar-link-bg" : ""}`}>
                                <div className="sidebar-link-block">
                                    <Image src={item.imgURL} alt={item.label} width={40} height={40}/>
                                    <p className={`sidebar-logo ${isActive ? "sidebar-logo-active" : ""}`}>{item.label}</p>
                                </div>
                            </Link>
                        )
                    })
                }
                USER
            </nav>
            <Footer user={user} />
        </section>
    )
}

export default Sidebar