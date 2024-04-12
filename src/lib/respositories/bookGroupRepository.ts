import type { BookGroupDTO } from '$lib/DTO/bookGroupDTO'
import type { PrismaClient } from '@prisma/client'

export class BookGroupRepository {
	#db: PrismaClient // TODO: this in ideal scerario is not prisma client but some more generic type (which have method findFirst etc)
	constructor(db: PrismaClient) {
		this.#db = db
	}

	async create(bookGroup: BookGroupDTO) {
		const createdBookGroup = await this.#db.bookGroup.create({
			data: bookGroup,
		})
		return createdBookGroup
	}

	async findByNameForCreator({ name, creatorId }: BookGroupDTO) {
		const bookGroup = await this.#db.bookGroup.findFirst({
			where: {
				name,
				creatorId,
			},
		})
		return bookGroup
	}
}
