import '@/styles/global.css'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'

interface IProps {
	children: ReactNode
}

const Index = ({ children }: IProps) => {
	return (
		<html lang='en'>
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
