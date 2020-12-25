import styles from './index.less'

const Index = () => {
	return (
		<div
                  className={ `
                        ${styles._local}
                        border_box flex justify_between cursor_point
                  `}
		>
			<div className='block' />
			<div className='block' />
			<div className='block' />
		</div>
	)
}

export default Index
