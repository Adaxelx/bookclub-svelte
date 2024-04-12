import type { BookGroupDTO } from '$lib/DTO/bookGroupDTO'
import type { BookGroupRepository } from '$lib/respositories/bookGroupRepository'
import { ValidationError } from '$lib/validators'

export class CreateBookGroupUC {
	#bookGroupRepository: BookGroupRepository
	constructor(bookGroupRepository: BookGroupRepository) {
		this.#bookGroupRepository = bookGroupRepository
	}

	async exec(bookGroup: BookGroupDTO) {
		const bookGroupExists =
			await this.#bookGroupRepository.findByNameForCreator(bookGroup)
		if (bookGroupExists) {
			throw new ValidationError('You already have a book group with this name.')
		}
		return this.#bookGroupRepository.create(bookGroup)
	}
}
