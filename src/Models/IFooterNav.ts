interface IFooterNavLinks {
	id: string
	name: string
	href: string
}

export interface IFooterNav {
	id: string
	title: string
	links: Array<IFooterNavLinks>
}
