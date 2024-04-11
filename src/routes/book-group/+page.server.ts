import { createBookGroupComposer } from '$lib/CreateBookGroup'
import type { RequestEvent } from '@sveltejs/kit'

export const actions = {
	default: async ({ request }: RequestEvent) => {
		return createBookGroupComposer().handle(request)
	},
}

//Flow

// 1. sprawdź czy użytkownik jest zalogowany (jeśli wymagane logowanie)
// 2. wywołaj use case
// 3. sprawdź walidatorem (zod) czy przysłane dane są poprawne
// 3a. jeśli dane są poprawne to mamy obiekt
// 3b. jeśli dane są niepoprawne to zwróć błąd (obsługa błędów generyczna)
// 4. wywołaj repozytorium, które zapisze dane w bazie
// 5. zwróć odpowiedź do klienta (błąd lub sukces)
