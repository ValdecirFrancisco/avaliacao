export default function Nav() {
    return (
        <nav className="flex justify-between p-12 bg-slate-600">
            <h2>LOGO</h2> <h2>Blog</h2> <h2>Biblioteca</h2>
            <h2>

           --icon avatar--
                <a href="#" className="relative inline-flex items-center justify-center w-12 h-12 text-lg text-white rounded bg-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title description" role="graphics-symbol">
                        <title id="title">User Icon</title>
                        <desc id="description">
                            User icon associated with a particular user account
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </a>
            </h2>
        </nav>
    )
}