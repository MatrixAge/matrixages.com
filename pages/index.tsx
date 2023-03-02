import cx from 'classix'

import { Intro } from '@/widgets/index/components'

import styles from './index.module.css'

const Index = () => {
	return (
		<div className={cx('w_100 h_100vh border_box flex align_center justify_center', styles._local)}>
			<Intro />
		</div>
	)
}

export default Index
