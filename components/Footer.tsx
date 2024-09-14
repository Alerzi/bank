"use client"
import React from 'react'
import { FooterProps } from '@/utils/types'
import Image from "next/image"
import {logout} from "@/icons"
import "@/css/footer.css"
import {useRouter} from "next/navigation"
import Cookie from "js-cookie"

const Footer = ({user, type = "desktop"}: FooterProps) => {
    const router = useRouter();
    const onLogout = () => {
        Cookie.remove("firstname"); Cookie.remove("lastname"); Cookie.remove("email"); Cookie.remove("id"); Cookie.remove("token");
        router.push("/sign-in");
    }
  return (
    <div className="footer-wrapper">
        { user.firstName && (
            <footer className="footer">
                <div className={type === "mobile" ? "footer-name-mobile" : "footer-name"}>
                    <p>{user.firstName[0]}</p>
                </div>
                <div className={type === "mobile" ? "footer-email-mobile" : "footer-email"}>
                    <h1>{user.firstName}</h1>
                    <p>{user.email}</p>
                </div>
                <div className="footer-image">
                    <Image src={logout} alt="logout" width={20} height={20} onClick={() => onLogout()}/>
                </div>
            </footer>
        )}
    </div>
  )
}

export default Footer