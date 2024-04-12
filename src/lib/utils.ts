import type { z } from 'zod'
import { ZodError } from 'zod'
import type { HttpRequest } from './http'
import { ValidationError } from './validators'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateRequestData = async <T extends z.ZodObject<any>>(
	request: HttpRequest,
	validator: T,
): Promise<z.infer<T>> => {
	const formData = request.body

	const data = Object.fromEntries(formData.entries())
	try {
		const parsedData = validator.parse(data)
		return parsedData
	} catch (err) {
		if (err instanceof ZodError) {
			throw new ValidationError(err.format()._errors)
		}
		throw new ValidationError('Unknown validation error')
	}
}
