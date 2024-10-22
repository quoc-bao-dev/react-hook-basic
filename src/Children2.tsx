import { FormEventHandler, useRef } from "react"

const Children2 = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        const payload = {
            email,
            password
        }

        console.log(payload);

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <p>Email</p>

                <input type="text" placeholder="Email" ref={emailRef} />

                <p>Password</p>

                <input type="password" placeholder="******" ref={passwordRef} />

                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Children2