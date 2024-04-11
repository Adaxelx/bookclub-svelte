import type { BookGroupDTO } from '$lib/DTO/bookGroupDTO'
import type { BookGroupRepository } from '$lib/respositories/bookGroupRepository'

export class CreateBookGroupUC {
	#bookGroupRepository: BookGroupRepository
	constructor(bookGroupRepository: BookGroupRepository) {
		this.#bookGroupRepository = bookGroupRepository
	}

	async exec(bookGroup: BookGroupDTO) {
		// tu np walidacja że nie może być ta sama nazwa grupy książek dla jednego usera
		return this.#bookGroupRepository.create(bookGroup)
	}
}

// controller wrapuje use case
// repository dostaje baze i jest przekazane do usecase
// usecase dostaje repozytorium i jest przekazane do kontrolera
// kontroler dostaje request
