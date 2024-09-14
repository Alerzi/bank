import react from "react"
import { AnimatedCounter } from "./"
import { TotalBalanceBoxProps } from "@/utils/types"
import { DoughnutChart } from "./"
import "@/css/totalBalanceBox.css"

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>
            <div className="totalBanks">
                <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
                <div className="balance">
                    <p>Total Current Balance</p>
                    <div className="totalBalanceAmount">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox