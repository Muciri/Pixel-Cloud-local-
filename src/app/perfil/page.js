import "@/app/perfil/profile.css"
import header from '@/components/header'
import footer from '@/components/footer'

function perfil(user){
    return (
        <div>
            {header()}

            <main>
                <section className="container">
                    <h1>Meu Perfil</h1>
                    <div id="data">
                    <article>
                        <img src="/images/others/icon.png" alt="Ícone de usuário" />
                        <h2>{user.nome_usuario}</h2>
                    </article>
                    <br /> <br />
                    <article>
                        <h2>dados pessoais:</h2>
                        <h3>nome: {user.nome}</h3>
                        <h3>email: {user.email}</h3>
                        <h3>telefone: {user.telefone}</h3>
                    </article>
                    </div>
                    <br />
                    <button
                    className="block w-full rounded bg-red-600 p-4 text-sm font-medium transition hover:scale-105"
                    style={{ width: '10rem', marginLeft: '45%' }}
                    id="quit"
                    >
                    Sair da Conta <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                </section>
            </main>

            {footer()}
        </div>
    )
}

export default perfil;
