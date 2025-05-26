// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

export declare class Card{
	card_id: string
	card_name: string
	card_image_src: string
}

export declare class BookStorage{
	book_id: string
	book_description: string
	book_author: string
}