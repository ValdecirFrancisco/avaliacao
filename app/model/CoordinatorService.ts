import { sql } from "@vercel/postgres";

export async function getAllCoordinator() {
    const { rows:coordinators } = await sql`SELECT * from coordinator`;
    return coordinators
    
}
export async function addCoordinator(name:string, email:string) {
    await sql`INSERT INTO coordinator(name, email) VALUES (${name}, ${email})`;
    
}
export async function deleteCoordinator(id:string) {
    await sql`DELETE FROM coordinator WHERE id=${id}`;
    
}