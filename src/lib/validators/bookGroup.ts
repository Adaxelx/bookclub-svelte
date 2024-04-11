import { z } from 'zod'

export const BookGroup = z.object({
	id: z.string(),
	creatorId: z.string(),
	name: z.string().max(255).min(3),
	createdAt: z.date(),
	updatedAt: z.date(),
})

export const BookGroupDTO = BookGroup.pick({ name: true, creatorId: true })

// export const User = z.object({
// 	id: z.string(),
// 	email: z.string(),
// 	name: z.string(),
// 	createdAt: z.date(),
// 	updatedAt: z.date(),
// })

// export const BookGroupsToUsers = z.object({
// 	bookGroupId: z.string(),
// 	userId: z.string(),
// })

// export const Password = z.object({
// 	hash: z.string(),
// 	userId: z.string(),
// })
// export const Opinion = z.object({
// 	id: z.string(),
// 	bookId: z.string(),
// 	description: z.string(),
// 	userId: z.string(),
// 	rate: z.number(),
// 	createdAt: z.date(),
// 	updatedAt: z.date(),
// })

// export const Book = z.object({
// 	id: z.string(),
// 	categoryId: z.string(),
// 	title: z.string(),
// 	author: z.string(),
// 	dateStart: z.date(),
// 	dateEnd: z.date(),
// 	opinions: z.array(Opinion),
// 	createdAt: z.date(),
// 	updatedAt: z.date(),
// })

// export const BookCategory = z.object({
// 	id: z.string(),
// 	bookGroupId: z.string(),
// 	name: z.string(),
// 	isActive: z.boolean(),
// 	wasPicked: z.boolean(),
// 	imageId: z.string(),
// 	createdAt: z.date(),
// 	updatedAt: z.date(),
// })

// export const Image = z.object({
// 	id: z.string(),
// 	bookGroupId: z.string().optional(),
// 	blob: z.instanceof(Buffer),
// 	altText: z.string(),
// 	contentType: z.string(),
// })
