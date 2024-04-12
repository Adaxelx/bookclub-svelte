import { createBookGroupComposer } from '$lib/use-cases/CreateBookGroup'
import { svelteAdapter } from '$lib/adapters/svelteAdapter.js'

export const actions = {
	default: svelteAdapter(createBookGroupComposer()),
}

//Flow

// 1. sprawdź czy użytkownik jest zalogowany (jeśli wymagane logowanie)
// 2. wywołaj use case
// 3. sprawdź walidatorem (zod) czy przysłane dane są poprawne
// 3a. jeśli dane są poprawne to mamy obiekt
// 3b. jeśli dane są niepoprawne to zwróć błąd (obsługa błędów generyczna)
// 4. wywołaj repozytorium, które zapisze dane w bazie
// 5. zwróć odpowiedź do klienta (błąd lub sukces)
