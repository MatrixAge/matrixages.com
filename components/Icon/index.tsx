import { useState, useEffect } from 'react'
import { getWrapStyles, getStyles, getSrc } from './utils'
import styles from './index.less'

interface IProps {
	icon: { outline: string; filled?: string }
	type?: 'outline' | 'filled'
	size?: number
	color?: string
	visibleWrap?: boolean
	bordered?: boolean
	filled?: boolean
	round?: boolean
	borderColor?: string
	fillColor?: string
}

const Index = (props: IProps) => {
	const {
		icon,
		type = 'outline',
		size = 20,
		color = 'black',
		visibleWrap,
		bordered,
		filled,
		round,
		borderColor = 'whitesmoke',
		fillColor = 'whitesmoke'
	} = props

	const [ state_src, setStateSrc ] = useState('')

	useEffect(
		() => {
			if (!icon) return
			if (!type) return

			setStateSrc(getSrc(icon[type]))
		},
		[ icon, type ]
	)

	return (
		<div className={styles._local}>
			{visibleWrap ? (
				<div
					className='icon_wrap'
					style={getWrapStyles({
						size,
						bordered,
						filled,
						round,
						borderColor,
						fillColor
					})}
				>
					<div
						className='icon'
						style={getStyles({ size, color, src: state_src })}
					/>
				</div>
			) : (
				<div className='icon' style={getStyles({ size, color, src: state_src })} />
			)}
		</div>
	)
}

export default Index
