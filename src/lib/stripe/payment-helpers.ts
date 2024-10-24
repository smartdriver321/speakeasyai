import Stripe from 'stripe'

export async function handleSubscriptionDeleted({
	subscriptionId,
	stripe,
}: {
	subscriptionId: string
	stripe: Stripe
}) {
	try {
		const subscription = await stripe.subscriptions.retrieve(subscriptionId)
	} catch (error) {
		console.error('Error handling subscription deletion', error)
		throw error
	}
}

export async function handleCheckoutSessionCompleted({
	session,
	stripe,
}: {
	session: Stripe.Checkout.Session
	stripe: Stripe
}) {
	const customerId = session.customer as string
	const customer = await stripe.customers.retrieve(customerId)
	const priceId = session.line_items?.data[0].price?.id

	if ('email' in customer && priceId) {
		//update user subscription
		//insert the payment
	}
}
