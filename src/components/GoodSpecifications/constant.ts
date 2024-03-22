import { v4 as uuidv4 } from 'uuid'

import { IGoodSpecifications } from '../../Models/IGood'

export const GOOD_SPECIFICATIONS: Array<IGoodSpecifications> = [
	{ id: uuidv4(), value: 'ELC00696', title: 'Код поставщика' },
	{ id: uuidv4(), value: 'ELC0200000696', title: 'Артикул' },
	{ id: uuidv4(), value: 'ELC00696', title: 'Код РАЭК' },
	{ id: uuidv4(), value: 'ELC00696', title: 'Код ЕТМ' },
	{ id: uuidv4(), value: 'Electric used', title: 'Бренд ' },
	{ id: uuidv4(), value: 'ELC00696', title: 'Серия' },
	{ id: uuidv4(), value: 'ELC0200000696', title: 'Код производителя' },
]
