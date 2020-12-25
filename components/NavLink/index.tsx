import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
	to: string
	as?: string
	className?: string
	prefetch?: boolean
	target?: string
	rel?: string
}

const NavLink: React.FC<IProps> = props => {
	const { children, to, as, className, target, rel } = props
	const router = useRouter()

	return (
		<Link as={as} href={to}>
			<a
				className={router.pathname === to ? 'active_link ' + className : className}
				target={target}
				rel={`nofollow ${rel}`}
			>
				{children}
			</a>
		</Link>
	)
}

export default NavLink
