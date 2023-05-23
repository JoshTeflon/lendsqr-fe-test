import React from 'react';
import { Users } from '../../components/icons';

interface SubItem {
  subname: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface SidenavItem {
  name: string;
  items: SubItem[];
}

export const getSidenavItems = () => {
  const sidenavItems: SidenavItem[] = [
    {
      name: "customers",
      items: [
        { subname: "Users", icon: Users },
        { subname: "Guarantors", icon: Users },
        { subname: "Loans", icon: Users },
        { subname: "Decision Models", icon: Users },
        { subname: "Savings", icon: Users },
        { subname: "Loan Request", icon: Users },
        { subname: "Whitelist", icon: Users },
        { subname: "Karma", icon: Users },
      ],
    },
    {
      name: "businesses",
      items: [
        { subname: "Organization", icon: Users },
        { subname: "Loan Products", icon: Users },
        { subname: "Savings Products", icon: Users },
        { subname: "Fees and Charges", icon: Users },
        { subname: "Transactions", icon: Users },
        { subname: "Services", icon: Users },
        { subname: "Service Account", icon: Users },
        { subname: "Settlements", icon: Users },
        { subname: "Reports", icon: Users },
      ],
    },
    {
      name: "settings",
      items: [
        { subname: "Preferences", icon: Users },
        { subname: "Fees and Pricing", icon: Users },
        { subname: "Audit Logs", icon: Users },
      ],
    },
  ];

  return sidenavItems;
};
