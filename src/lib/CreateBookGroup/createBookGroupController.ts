import { validateRequestData } from '$lib/utils'
import { BookGroupDTO } from '$lib/validators/bookGroup'
import type { CreateBookGroupUC } from './createBookGroupUC'

export class CreateBookGroupController {
	#createBookGroupUC: CreateBookGroupUC

	constructor(createBookGroupUC: CreateBookGroupUC) {
		this.#createBookGroupUC = createBookGroupUC
	}

	async handle(request: Request) {
		try {
			// tu walidacja zodem czy są dane sensowne i obsługa błędów
			const bookGroup = await validateRequestData(request, BookGroupDTO)
			const response = await this.#createBookGroupUC.exec(bookGroup)
			return response
		} catch (err) {
			console.error(err)
		}
	}
}
