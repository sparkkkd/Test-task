import { ReactNode } from 'react'

export interface INavigation {
	name: string
	href: string
}

export interface INavigationSocial {
	name: string
	href: string
	icon?: ReactNode | undefined
	isBackground: boolean
}
