import '@/styles/global.css'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import type { Next } from '@/types'

interface IProps extends Next.IPropsWithParams {
	children: ReactNode
}

const Index = (props: IProps) => {
	const { children, params } = props
	const { locale } = params

	return (
		<html lang={locale}>
			<head>
				<link rel='stylesheet' type='text/css' href='/init.css' />
				<link rel='stylesheet' type='text/css' href='/atom.css' />
			</head>
			<body>{children}</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'Matrixages',
	description: 'Matrixages - design better, life better.'
}

export default Index
