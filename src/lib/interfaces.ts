import type { HTTPError, HttpRedirectResponse } from './http'

export interface IController {
	handle: (
		request: IHttpRequest,
	) => Promise<IHttpResponse | HTTPError | HttpRedirectResponse>
}

export interface IHttpResponse<T = unknown> {
	status: number
	body: T
}

export interface IHttpRequest {
	body: FormData
	method: string
	query: string
}

export interface IHttpRedirectResponse {
	status: number
	location: string
}
