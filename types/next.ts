export namespace Next {
	export interface IPropsWithParams {
		params: Record<string, string> & { locale: 'en-US' | 'zh-CN' }
		searchParams: Record<string, string>
	}
}
