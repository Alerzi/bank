import { RightSidebarProps } from "@/utils/types"
import Link from "next/link"
import Image from "next/image"
import {plus} from "@/icons"
import {BankCard} from "@/components"
import "@/css/rightSidebar.css"

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
        <section className="profile-banner">
            <div className="profile">
                <div className="profile-img">
                    <span className="profile-text">{user.firstName ? user.firstName[0] : ""}</span>
                </div>
                <div className="profile-details">
                    <h1 className="profile-name">
                        {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="profile-email">{user?.email}</p>
                </div>
            </div>
        </section>
        <section className="banks">
            <div className="banks-top">
                <h2>My Banks</h2>
                <Link href="/" className="banks-link">
                    <Image src={plus} alt="plus"width={20} height={20} />
                    <h2 className="banks-link-text">Add bank</h2>
                </Link>
            </div>
            {banks?.length > 0 && (
                <div className="bank-cards">
                    <div className="bank-card-head">
                        <BankCard key={banks[0].$id} account={banks[0]} userName={`${user.firstName ? user.firstName : ""} ${user.lastName ? user.lastName : ""}`} showBalance={false} />
                    </div>
                    {banks[1] && (
                        <div className="bank-card-bot">
                            <BankCard key={banks[1].$id} account={banks[1]} userName={`${user.firstName ? user.firstName : ""} ${user.lastName ? user.lastName : ""}`} showBalance={false} />   
                        </div>
                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSidebar