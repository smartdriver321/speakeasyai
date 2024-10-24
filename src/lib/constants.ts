export const plansMap = [
	{
		id: 'basic',
		name: 'Basic',
		description: 'Get started with SpeakEasy!',
		price: '10',
		items: ['3 Blog Posts', '3 Transcription'],
		paymentLink: 'https://buy.stripe.com/test_14k8y17xHbFIf8k7ss',
		priceId:
			process.env.NODE_ENV === 'development'
				? 'price_1QDKoYJTaydivdEjDILmTBM4'
				: '',
	},
	{
		id: 'pro',
		name: 'Pro',
		description: 'All Blog Posts, let’s go!',
		price: '99.0',
		items: ['Unlimited Blog Posts', 'Unlimited Transcriptions'],
		paymentLink: 'https://buy.stripe.com/test_14k5lP8BL7ps5xK4gh',
		priceId:
			process.env.NODE_ENV === 'development'
				? 'price_1QDKoYJTaydivdEjONISrSPn'
				: '',
	},
]

export const ORIGIN_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://speakeasyai-demo.vercel.app'
