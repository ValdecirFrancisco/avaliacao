import { getAllCoordinator } from "@/app/model/CoordinatorService"

export const revalidate = 0

export default async function CoordinatorPage() {
    const coordinators = await getAllCoordinator()
    return (
        <>
            <h1> Lista de coordenadores </h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {coordinators.map(coordinator => (
                            <tr key= {coordinator.id}><td>{coordinator.name}</td> <td>{coordinator.email}</td> <td><a href={`/admin/coordinator/edit?id=${coordinator.id}`}>Editar</a></td></tr>
                        ))}
                </tbody>
            </table>
        </>


    )
}