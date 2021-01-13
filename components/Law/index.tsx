import Image from 'next/image'
import NavLink from '@/components/NavLink'
import styles from './index.less'

const Index = ({ className }: { className?: string }) => {
	return (
		<div className={`${styles._local} ${className} flex`}>
			<div className='beian gongan flex align_center mr_20'>
				<Image
					width={20}
					height={20}
					src='/images/icon_beian.png'
					alt='icon_beian'
				/>
				<span className='ml_4'>浙公网安备 33011002015372号</span>
			</div>
			<NavLink
				className='beian icp'
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
