export default async function EditCoordinator(){
    return (
        <>
        <h1> Editar Coordenador</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do coordenador" />
                <input type="text" name="email" placeholder="Digite o email do coordenador" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )

}