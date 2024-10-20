import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'My Profile',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Manage',
  },
  {
    component: CNavGroup,
    name: 'Team',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Direct Refferal',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Total Downline',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Team Level Downline',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Tree View',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Team Level Structure',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Rank Business Detail',
        to: '/base/list-groups',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Registration',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Registration',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fund',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Fund',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Add Fund History',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Activation',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Wallet Transfer',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Wallet Transfer History',
        to: '/charts',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Fund',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: 'Incomes',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sponsor Bonus',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
        },
      },
      {
        component: CNavItem,
        name: 'Team Buildin Bonus',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Rank Bonus',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Weekly Performance Bonus',
        to: '/icons/performancebonus',
      },
      {
        component: CNavItem,
        name: 'Daily Bonus',
        to: '/icons/performancebonus',
      },
      {
        component: CNavItem,
        name: 'Monthly Salary Bonus',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Consistency Bonus',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Special Bonus',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Monthly Bonus status',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Consistency Bonus status',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Wallet',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Support',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Password',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
