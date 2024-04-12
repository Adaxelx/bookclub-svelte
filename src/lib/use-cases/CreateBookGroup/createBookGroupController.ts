import { HTTPError, HttpResponse, type HttpRequest } from '$lib/http'
import type { IController } from '$lib/interfaces'
import { validateRequestData } from '$lib/utils'
import { ValidationError } from '$lib/validators'
import { BookGroupDTO } from '$lib/validators/bookGroup'
import type { CreateBookGroupUC } from './createBookGroupUC'

export class CreateBookGroupController implements IController {
	#createBookGroupUC: CreateBookGroupUC

	constructor(createBookGroupUC: CreateBookGroupUC) {
		this.#createBookGroupUC = createBookGroupUC
	}

	async handle(request: HttpRequest) {
		try {
			const bookGroup = await validateRequestData(request, BookGroupDTO)
			const response = await this.#createBookGroupUC.exec(bookGroup)
			return new HttpResponse(200, response)
		} catch (err) {
			if (err instanceof ValidationError) {
				return new HTTPError(400, err.message)
			}
			return new HTTPError(500, 'Unknown error')
		}
	}
}
