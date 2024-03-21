import styles from './TemplateName.module.sass'

export interface TemplateNameProps {}

export default function TemplateName({}: TemplateNameProps) {
	return (
		<div className={styles.templateName}>
			<h1>TemplateName component</h1>
		</div>
	)
}
