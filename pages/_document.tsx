import { Head, Html, Main, NextScript } from 'next/document'

export default () => {
	return (
		<Html>
			<Head />
			<head>
				<title>Matrixages - design better, life better.</title>
				<link rel='stylesheet' type='text/css' href='/init.css' />
				<link rel='stylesheet' type='text/css' href='/atom.css' />
			</head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
