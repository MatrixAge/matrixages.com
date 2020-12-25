import NavLink from '@/components/NavLink'
import product_items from './data'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`
                        ${styles._local}
                        border_box flex flex_column relative
                  `}
		>
			<div className='top cover absolute w_100 top_0 left_0' />
			<div className='bottom cover absolute w_100 bottom_0 left_0' />
			<div className='product_items w_100 border_box flex flex_column'>
				{product_items.map((item, index) => (
					<NavLink
						className={`
                                          ${item.border ? 'border' : ''}
                                          product_item border_box flex align_center
                                    `}
						key={index}
						to={item.href}
						target='_blank'
						rel='noopener noreferrer'
					>
						<div
							className='img_wrap border_box flex justify_center align_center'
							style={{ background: item.bg_color }}
						>
							<img className='img' src={item.img} alt={item.name} />
						</div>
						<div className='right flex flex_column justify_center'>
							<span className='name'>{item.name}</span>
							<span className='slogan line_clamp_1'>{item.slogan}</span>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Index
