import { db } from '$lib/db'
import { BookGroupRepository } from '$lib/respositories/bookGroupRepository'
import { CreateBookGroupController } from './createBookGroupController'
import { CreateBookGroupUC } from './createBookGroupUC'

export const createBookGroupComposer = () => {
	const bookGroupRepository = new BookGroupRepository(db)
	const createBookGroupUC = new CreateBookGroupUC(bookGroupRepository)
	const createBookGroupController = new CreateBookGroupController(
		createBookGroupUC,
	)
	return createBookGroupController
}
