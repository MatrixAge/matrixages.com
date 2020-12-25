import Head from 'next/head'
import Intro from '@/components/Index/Intro'
import Products from '@/components/Index/Products'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`
                  w_100 h_100vh border_box flex align_center justify_center
                  ${styles._local}
            `}
		>
			<Head>
				<title>Matrixages</title>
			</Head>
			<Intro />
                  <Products />
		</div>
	)
}

export default Index
