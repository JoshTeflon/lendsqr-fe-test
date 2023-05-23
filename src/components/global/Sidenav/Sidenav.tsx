import React, { ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import { Button } from '../../interface'

// interface SubNavItem {
//   label: string
//   href: string
// }

// interface NavItem {
//   icon: ReactNode | null
//   label: string
//   href?: string
//   subNav?: Array<SubNavItem>
// }

// const navItems: Array<NavItem> = [
//   {
//     icon: <DashboardOutline />,
//     label: 'frontdesk',
//     subNav: [
//       {
//         label: 'dashboard',
//         href: ''
//       },
//       {
//         label: 'patient registration',
//         href: 'patient-registration'
//       },
//       {
//         label: 'appointment',
//         href: 'appointment'
//       },
//       {
//         label: 'case file',
//         href: 'case-file'
//       },
//     ]
//   },
//   {
//     icon: <ProfileDoc />,
//     label: 'nursing',
//     subNav: [
//       {
//         label: 'vitals',
//         href: 'nursing/vitals'
//       },
//       {
//         label: 'treatment',
//         href: 'nursing/treatment'
//       }
//     ]
//   },
//   {
//     icon: <ProfileCard />,
//     label: 'consultation',
//     href: 'consultation',
//     subNav: []
//   },
//   {
//     icon: <Cog />,
//     label: 'settings',
//     href: 'settings'
//   },
//   {
//     icon: <ChatSupport />,
//     label: 'support',
//     href: 'support'
//   }
// ]

interface SidenavProps {
    show: boolean
}

const Sidenav: React.FC<SidenavProps> = ({ show }) => {
  const [activeNavItem, setActiveNavItem] = useState<string>('')

  const location = useLocation()

  const handleNavDropdown = (label: string) => {
    if (activeNavItem === label) {
      setActiveNavItem('')
    } else {
      setActiveNavItem(label)
    }
  }

//   useEffect(() => {
//     navItems.forEach((navItem: NavItem) => {
//       if (navItem.href && location.pathname === `/${navItem.href}`) {
//         setActiveNavItem(navItem.label)
//       } else if (navItem.subNav?.length !== undefined && navItem.subNav?.length > 0) {
//         navItem.subNav.forEach((subNavItem: SubNavItem) => {
//           if (location.pathname === `/${subNavItem.href}`) {
//             setActiveNavItem(navItem.label)
//           }
//         })
//       }
//     })
//   }, [location.pathname])

  return (
        <nav className={classnames(
          '',
          { 'ml-0': show },
          { '-ml-[100%]': !show }
          )}
        >
          
        </nav>
    )
}

export default Sidenav