import getDbConnection from '@/lib/neon/db'

export default async function Dashboard() {
	const sql = await getDbConnection()
	const response = await sql`SELECT version()`
	const data = JSON.stringify(response)

	return <>{data}</>
}
