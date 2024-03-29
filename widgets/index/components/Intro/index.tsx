import cx from 'classix'
import { useRouter } from 'next/router'
import { GithubLogo, MediumLogo, TwitterLogo } from 'phosphor-react'
import { When } from 'react-if'

import MatrixAge from '@/components/MatrixAge'

import dao from './data'
import styles from './index.module.css'

import type { App } from '@/types'

const Index = () => {
	const { locale } = useRouter()

	return (
		<div
			className={cx(
				'border_box flex flex_column justify_center align_center relative',
				styles._local,
				styles[locale as App.Locales]
			)}
		>
			<a
				className='header_wrap w_100 border_box flex flex_column align_center'
				href='https://github.com/MatrixAges'
				target='_blank'
				rel='noopener noreferrer'
			>
				<MatrixAge />
				<div className='right flex flex_column align_center'>
					<span className='name font_bold'>
						Matri<span className='x'>x</span>ages
					</span>
					<span className='slogan'>design better, life better</span>
				</div>
			</a>
			<div className='description_items flex flex_column'>
				{dao[locale as App.Locales].map((item, index) => (
					<span className='description_item text_justify' key={index}>
						{item}
					</span>
				))}
			</div>
			<When condition={locale === 'en-US'}>
				<div className='social_medias w_100 flex justify_center align_center'>
					<div className='social_media_item flex justify_center align_center'>
						<a
							className='flex'
							href='https://twitter.com/xiewendao'
							target='_blank'
							title='twitter'
						>
							<TwitterLogo size={20} weight='bold' color='white'></TwitterLogo>
						</a>
					</div>
					<div className='social_media_item flex justify_center align_center' title='medium'>
						<a className='flex' href='https://medium.com/@xiewendao' target='_blank'>
							<MediumLogo size={20} weight='bold' color='white'></MediumLogo>
						</a>
					</div>
					<div className='social_media_item flex justify_center align_center'>
						<a
							className='flex'
							href='https://github.com/MatrixAge'
							target='_blank'
							title='github'
						>
							<GithubLogo size={20} weight='bold' color='white'></GithubLogo>
						</a>
					</div>
				</div>
			</When>
		</div>
	)
}

export default Index
