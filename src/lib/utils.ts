import type { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateRequestData = async <T extends z.ZodObject<any>>(
	request: Request,
	validator: T,
): Promise<z.infer<T>> => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData.entries())
	const parsedData = validator.parse(data)
	return parsedData
}
