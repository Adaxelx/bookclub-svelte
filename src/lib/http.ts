import type {
	IHttpRedirectResponse,
	IHttpRequest,
	IHttpResponse,
} from './interfaces'

export class HTTPError extends Error {
	status: number
	constructor(status: number, message: string) {
		super(message)
		this.status = status
	}
}

export class HttpRequest implements IHttpRequest {
	body: FormData
	method: string
	query: string

	constructor({
		body,
		method,
		query,
	}: {
		body: FormData
		method: string
		query: string
	}) {
		this.body = body
		this.method = method
		this.query = query
	}
}

export class HttpResponse<BodyType> implements IHttpResponse<BodyType> {
	status: number
	body: BodyType

	constructor(status: number, body: BodyType) {
		this.status = status
		this.body = body
	}
}

export class HttpRedirectResponse implements IHttpRedirectResponse {
	status: number
	location: string

	constructor(location: string, status?: number) {
		this.status = status ?? 302
		this.location = location
	}
}
