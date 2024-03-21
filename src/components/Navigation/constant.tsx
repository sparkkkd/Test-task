import { INavigation, INavigationSocial } from '../../Models/INavigation'

import MessageIcon from '../../images/message-icon.svg?react'
import PercentIcon from '../../images/percent-icon.svg?react'

export const NavigationLinks: Array<INavigation> = [
	{ name: 'Мои заказы', href: '/' },
	{ name: 'Сотрудники', href: '/' },
	{ name: 'Шаблоны заказов', href: '/' },
	{ name: 'Обращение', href: '/' },
]

export const NavigationSocialLinks: Array<INavigationSocial> = [
	{
		name: 'Ваш менеджер',
		href: '/',
		isBackground: true,
		icon: <MessageIcon />,
	},
	{ name: 'Акции', href: '/', isBackground: false, icon: <PercentIcon /> },
	{ name: 'Блог', href: '/', isBackground: false },
]
