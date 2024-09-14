"use client"

import React from "react"
import {HeaderBox, RightSidebar, TotalBalanceBox} from "@/components"
import "@/css/page.css"
import Cookie from "js-cookie"

const Home = () => {
    const loggedIn = {firstName: Cookie.get("firstname"), lastName: Cookie.get("lastname"), email: Cookie.get("email")};
    

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"} subtext="Access and manage your account and transactions efficiently." />
                </header>
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
                <p>RECENT TRANSACTIONS</p>
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}/>
        </section>
    )
}

export default Home