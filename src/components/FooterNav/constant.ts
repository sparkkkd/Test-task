import { v4 as uuidv4 } from 'uuid'

import { IFooterNav } from '../../Models/IFooterNav'

export const FOOTER_NAV_FORWOMEN: IFooterNav = {
	id: uuidv4(),
	title: 'Женщинам',
	links: [
		{ id: uuidv4(), name: 'Одежда', href: '/' },
		{ id: uuidv4(), name: 'Обувь', href: '/' },
		{ id: uuidv4(), name: 'Аксессуары', href: '/' },
		{ id: uuidv4(), name: 'Белье', href: '/' },
		{ id: uuidv4(), name: 'Bra fitting', href: '/' },
	],
}

export const FOOTER_NAV_FORMEN: IFooterNav = {
	id: uuidv4(),
	title: 'Мужчинам',
	links: [
		{ id: uuidv4(), name: 'Одежда', href: '/' },
		{ id: uuidv4(), name: 'Обувь', href: '/' },
		{ id: uuidv4(), name: 'Аксессуары', href: '/' },
		{ id: uuidv4(), name: 'Белье', href: '/' },
	],
}

export const FOOTER_NAV_FORCHILDREN: IFooterNav = {
	id: uuidv4(),
	title: 'Детям',
	links: [
		{ id: uuidv4(), name: 'Одежда', href: '/' },
		{ id: uuidv4(), name: 'Обувь', href: '/' },
		{ id: uuidv4(), name: 'Аксессуары', href: '/' },
		{ id: uuidv4(), name: 'Белье', href: '/' },
		{ id: uuidv4(), name: 'Игрушки', href: '/' },
		{ id: uuidv4(), name: 'Малыши', href: '/' },
	],
}

export const FOOTER_NAV_FORSPORT: IFooterNav = {
	id: uuidv4(),
	title: 'Виды спорта',
	links: [
		{ id: uuidv4(), name: 'Велоспорт', href: '/' },
		{ id: uuidv4(), name: 'Туризм', href: '/' },
		{ id: uuidv4(), name: 'Тренажеры и фитнес', href: '/' },
		{ id: uuidv4(), name: 'Командные виды спорта', href: '/' },
		{ id: uuidv4(), name: 'Командные виды спорта', href: '/' },
	],
}
