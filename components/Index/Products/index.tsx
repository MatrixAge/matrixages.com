import Image from 'next/image'
import NavLink from '@/components/NavLink'
import product_items from './data'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`
                        ${styles._local}
                        border_box
                  `}
		>
			<div className='product_items w_100 border_box flex flex_wrap'>
				{product_items.map((item, index) => (
					<NavLink
						className={`
                                          ${item.border ? 'border' : ''}
                                          product_item border_box flex flex_column justify_center relative
                                    `}
						key={index}
						to={item.href}
						target='_blank'
						rel='noopener noreferrer'
					>
						<div
							className='img_wrap border_box flex justify_center align_center absolute'
							style={{ background: item.bg_color }}
						>
							<Image
								className='img'
								width={48}
								height={48}
								src={item.img}
								alt={item.name}
							/>
						</div>
						<div className='detail w_100 border_box flex flex_column'>
							<span className='name'>{item.name}</span>
							<span className='slogan line_clamp_1'>{item.slogan}</span>
							<div className='tags w_100 border_box flex'>
								{item.tags.map((it, idx) => (
									<div
										className='tag flex align_center'
										key={idx}
									>
										<div className='mark_wrap flex justify_center align_center'>
											<span className='mark'>#</span>
										</div>
										<span className='text'>{it}</span>
									</div>
								))}
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Index
