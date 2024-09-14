import {home, dollar, money, transaction} from "@/icons"

export const sidebarLinks = [
    {
      imgURL: home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: dollar,
      route: "/my-banks",
      label: "My Banks",
    },
    {
      imgURL: transaction,
      route: "/transaction-history",
      label: "Transaction History",
    },
    {
      imgURL: money,
      route: "/payment-transfer",
      label: "Transfer Funds",
    },
  ];