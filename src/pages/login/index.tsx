import { useState } from "react"


export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div className="container-login">
            <form action="">
                <label htmlFor="email">
                    <span>E-mail</span>
                    <input id="email" type="email" value={email} onChange={e =>setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    <span>Senha</span>
                    <input id="password" type="password"value={password} onChange={e =>setPassword(e.target.value)}  />
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}