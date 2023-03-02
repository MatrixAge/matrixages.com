import cx from 'classix'

import { Intro } from './components'
import styles from './index.module.css'

import type { Next } from '@/types'

const Index = (props: Next.IPropsWithParams) => {
	const { params } = props
	const { locale } = params

	return (
		<div className={cx('w_100 h_100vh border_box flex align_center justify_center', styles._local)}>
			<Intro locale={locale} />
		</div>
	)
}

export default Index
