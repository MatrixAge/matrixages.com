import { CSSProperties } from 'react'

export const getWrapStyles = ({
	size,
	bordered,
	filled,
	round,
	borderColor,
	fillColor
}): CSSProperties => {
	const styles: any = {}

	if (bordered) styles.border = '2rpx solid ' + borderColor
	if (filled) styles.background = fillColor
	if (round) styles.borderRadius = '50%'

	styles.width = size * 1.5 + 'px'
	styles.height = size * 1.5 + 'px'

	return styles
}

export const getStyles = ({ size, color, src }): CSSProperties => {
      let styles: any = {}

	styles.width = size + 'px'
	styles.height = size + 'px'
	styles.background = color
	styles.WebkitMaskImage = `url("${src}")`

	return styles
}

export const getSrc = (svg: string) => {
	if (!svg) return

	return 'data:image/svg+xml,' + svg.replace(/</g, '%3C').replace(/>/g, '%3E')
}
