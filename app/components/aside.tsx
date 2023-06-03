export default function Aside() {
    return (
        <ul className="w-64 bg-slate-100">
            <li> <a href="/admin/">Home</a> </li>
            <li> <a href="/admin/coordinator/new">Cadastrar Coordenador</a> </li>
            <li> <a href="/admin/coordinator">Listar Coordenadores</a> </li>
            <li> <a href="/admin/coordinator">Cadastrar Professor</a> </li>
        </ul>
    )
}