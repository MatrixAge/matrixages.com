import MatrixAge from '@/components/MatrixAge'
import styles from './index.less'

const Index = () => {
	const product_items = [
		{
			name: 'atom.css',
			slogan:
				'A atom-style library of CSS atomic elements. To build app faster and more flexible.',
			img: '/images/atom.css.png'
		}
	]
	return (
		<div
			className={`
                  w_100 h_100vh border_box flex flex_column align_center justify_center
                  ${styles._local}
            `}
		>
			<div className='header_wrap border_box flex'>
				<MatrixAge />
				<div className='right flex flex_column justify_center'>
					<span className='name font_bold'>Matrixage</span>
					<span className='slogan'>design better, life better</span>
				</div>
			</div>
			<div className='product_items'>
				{product_items.map((item, index) => (
					<div className='product_item border_box flex align_center' key={index}>
						<div className='img_wrap flex justify_center align_center'>
							<img className='img' src={item.img} alt={item.name} />
						</div>
						<div className='right flex flex_column justify_center'>
							<span className='name'>{item.name}</span>
							<span className='slogan'>{item.slogan}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Index
