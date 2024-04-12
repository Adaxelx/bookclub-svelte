export class ValidationError extends Error {
	constructor(messages: string[] | string) {
		const isMessagesArray = Array.isArray(messages)
		super(isMessagesArray ? messages.join(', ') : messages)
		this.name = 'ValidationError'
	}
}
