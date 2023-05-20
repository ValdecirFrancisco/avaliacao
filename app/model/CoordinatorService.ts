import { sql } from "@vercel/postgres";

export async function getAllCoordinator() {
    const { rows:coordinators } = await sql`SELECT * from coordinator`;
    return coordinators
    
}