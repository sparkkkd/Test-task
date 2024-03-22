import { v4 as uuidv4 } from 'uuid'

import { IFooter } from '../../Models/IFooter'

import PDFIcon from '../../images/pdf-icon.svg?react'
import VideoIcon from '../../images/video-icon.svg?react'
import FAQIcon from '../../images/faq-icon.svg?react'
import YTIcon from '../../images/yt-icon.svg?react'

export const FOOTER_LINKS: Array<IFooter> = [
	{
		id: uuidv4(),
		name: 'PDF  презентация',
		icon: <PDFIcon />,
		isAccent: false,
	},
	{
		id: uuidv4(),
		name: 'Видео инструкция ',
		icon: <VideoIcon />,
		isAccent: false,
	},
	{ id: uuidv4(), name: 'FAQ', icon: <FAQIcon />, isAccent: false },
	{ id: uuidv4(), name: 'Мы на YouTube', icon: <YTIcon />, isAccent: true },
	{ id: uuidv4(), name: 'Политика конфиденциальности ', isAccent: false },
	{ id: uuidv4(), name: 'Лицензионное соглашение', isAccent: false },
]
