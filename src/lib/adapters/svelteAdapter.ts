import { HTTPError, HttpRedirectResponse, HttpRequest } from '$lib/http'
import type { IController } from '$lib/interfaces'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const svelteAdapter =
	(controller: IController) =>
	async ({ request }: RequestEvent) => {
		const formData = await request.formData()
		const httpRequest = new HttpRequest({
			body: formData,
			method: request.method,
			query: '',
		})
		const response = await controller.handle(httpRequest)
		if (response instanceof HTTPError) {
			if (response.status < 500) {
				return fail(response.status, { error: response.message })
			}
			return error(response.status, response.message)
		}
		if (response instanceof HttpRedirectResponse) {
			return redirect(response.status, response.location)
		}
		return {
			res: response.body,
		}
	}
