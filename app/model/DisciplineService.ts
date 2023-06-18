import { sql } from "@vercel/postgres";

export async function getAllDiscipline() {
    const { rows:disciplines } = await sql`SELECT * from discipline`;
    return disciplines
    
}
export async function addDiscipline(name:string, description:string) {
    await sql`INSERT INTO coordinator(name, description) VALUES (${name}, ${description})`;
    
}
export async function deleteDisciplineById(id:string) {
    await sql`DELETE FROM coordinator WHERE id=${id}`;
    
}
export async function getDisciplineById(id:string) {
   const {rows:disciplines} = await sql`SELECT * FROM discipline WHERE id=(${id})`
   return disciplines[0]
}
export async function updateDisciplineById(id:string, name:string, description:string) {
    await sql `UPDATE coordinator SET name=${name}, email =${description} WHERE id=${id}`
 }
