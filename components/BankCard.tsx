import React from 'react'
import { CreditCardProps } from '@/utils/types'
import Link from "next/link"
import Image from "next/image"
import { formatAmount } from '@/utils/format'
import { paypass, card } from "@/icons"
import "@/css/bankCard.css"

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className="card">
        <Link href="/" className="card-link">
            <div className="bank-card-content">
                <div className="bank-card-top">
                    <h1>{account.name || userName}</h1>
                    <p>{formatAmount(account.currentBalance)}</p>
                </div>
                <article>
                    <div className="bank-card-mid">
                        <h1>{userName}</h1>
                        <h2>●● / ●●</h2>
                    </div>
                    <p className="bank-card-bottom">
                        ●●●● ●●●● ●●●●
                        <span> 1234</span>
                    </p>
                </article>
            </div>
            <div className="card-icon">
                <Image src={paypass} width={20} height={24} alt="paypass" />
                <Image src={card} width={45} height={32} alt="mastercard" />
            </div>
        </Link>
    </div>
  )
}

export default BankCard