import type {
	Book,
	BookCategory,
	BookGroup,
	BookGroupsToUsers,
	User,
	Opinion,
	Image,
} from '@prisma/client'

export type {
	Book,
	BookCategory,
	BookGroup,
	BookGroupsToUsers,
	User,
	Opinion,
	Image,
}

export class UserEntity {
	#user: User
	constructor(user: User) {
		this.#user = user
	}
	get id() {
		return this.#user.id
	}
	get email() {
		return this.#user.email
	}

	get name() {
		return this.#user.name
	}

	static create(user: User) {
		return new UserEntity(user)
	}
}

export class BookEntity {
	#book: Book
	constructor(book: Book) {
		this.#book = book
	}
	get id() {
		return this.#book.id
	}
	get title() {
		return this.#book.title
	}
	get author() {
		return this.#book.author
	}
	get categoryId() {
		return this.#book.categoryId
	}
	get dateStart() {
		return this.#book.dateStart
	}
	get dateEnd() {
		return this.#book.dateEnd
	}

	static create(book: Book) {
		return new BookEntity(book)
	}
}

export class BookCategoryEntity {
	#bookCategory: BookCategory
	constructor(bookCategory: BookCategory) {
		this.#bookCategory = bookCategory
	}
	get id() {
		return this.#bookCategory.id
	}
	get name() {
		return this.#bookCategory.name
	}
	get isActive() {
		return this.#bookCategory.isActive
	}
	get wasPicked() {
		return this.#bookCategory.wasPicked
	}
	get imageId() {
		return this.#bookCategory.imageId
	}

	static create(bookCategory: BookCategory) {
		return new BookCategoryEntity(bookCategory)
	}
}

export class BookGroupEntity {
	#bookGroup: BookGroup
	constructor(bookGroup: BookGroup) {
		this.#bookGroup = bookGroup
	}
	get id() {
		return this.#bookGroup.id
	}
	get creatorId() {
		return this.#bookGroup.creatorId
	}
	get name() {
		return this.#bookGroup.name
	}

	static create(bookGroup: BookGroup) {
		return new BookGroupEntity(bookGroup)
	}
}

export class BookGroupsToUsersEntity {
	#bookGroupsToUsers: BookGroupsToUsers
	constructor(bookGroupsToUsers: BookGroupsToUsers) {
		this.#bookGroupsToUsers = bookGroupsToUsers
	}
	get userId() {
		return this.#bookGroupsToUsers.userId
	}
	get bookGroupId() {
		return this.#bookGroupsToUsers.bookGroupId
	}

	static create(bookGroupsToUsers: BookGroupsToUsers) {
		return new BookGroupsToUsersEntity(bookGroupsToUsers)
	}
}

export class OpinionEntity {
	#opinion: Opinion
	constructor(opinion: Opinion) {
		this.#opinion = opinion
	}
	get id() {
		return this.#opinion.id
	}
	get userId() {
		return this.#opinion.userId
	}
	get bookId() {
		return this.#opinion.bookId
	}
	get rate() {
		return this.#opinion.rate
	}

	static create(opinion: Opinion) {
		return new OpinionEntity(opinion)
	}
}
