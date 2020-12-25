import NavLink from '@/components/NavLink'
import MatrixAge from '@/components/MatrixAge'
import description_items from './data'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`
                  ${styles._local}
                  border_box flex flex_column
            `}
		>
			<NavLink
				className='header_wrap w_100 border_box flex'
				to='https://github.com/MatrixAges'
				target='_blank'
				rel='noopener noreferrer'
			>
				<MatrixAge />
				<div className='right flex flex_column justify_center'>
					<span className='name font_bold'>Matrixages</span>
					<span className='slogan'>design better, life better</span>
				</div>
			</NavLink>
			<div className='description_items flex flex_column'>
				{description_items.map((item, index) => (
					<span className='description_item' key={index}>
						{item}
					</span>
				))}
			</div>
		</div>
	)
}

export default Index
