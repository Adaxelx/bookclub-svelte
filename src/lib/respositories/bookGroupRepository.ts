import type { BookGroupDTO } from '$lib/DTO/bookGroupDTO'
import type { PrismaClient } from '@prisma/client'

export class BookGroupRepository {
	#db: PrismaClient // TODO: this can be replaced with more generic type
	constructor(db: PrismaClient) {
		this.#db = db
	}

	async create(bookGroup: BookGroupDTO) {
		const createdBookGroup = await this.#db.bookGroup.create({
			data: bookGroup,
		})
		return createdBookGroup
	}
}
