import type { BookGroup } from '$lib/entities'

export type BookGroupDTO = Pick<BookGroup, 'name' | 'creatorId'>
