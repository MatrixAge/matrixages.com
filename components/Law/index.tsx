import NavLink from '@/components/NavLink'
import styles from './index.less'

const Index = ({ className }: { className?: string }) => {
	return (
		<div className={`${styles._local} ${className}`}>
			<NavLink
				className='icp'
				to='https://beian.miit.gov.cn'
				target='_blank'
				rel='noopener noreferrer'
			>
				浙ICP备2021000988号-1
			</NavLink>
		</div>
	)
}

export default Index
