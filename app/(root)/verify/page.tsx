"use client"
import React from 'react'
import {bank} from "@/icons"
import Image from "next/image"
import { useRouter } from "next/navigation"
import "@/css/pages/verify.css" 

const verify = () => {
    const navigate = useRouter();
    setTimeout(() => {
        navigate.push("/");
    }, 2000);

  return (
    <div className="verify">
        <div className="verify-image"><Image src={bank} alt="bank" width={150} height={150} /></div>
        <div className="verify-text">Your email was successfuly confirmed!</div>
    </div>
  )
}

export default verify