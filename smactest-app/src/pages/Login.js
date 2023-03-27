import './Login.css'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isPending, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="card" style={{width: '30rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="input1">Email</label>
                            <input required type="email" className="form-control mb-4" id="input1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="input2">Password</label>
                            <input required type="password" className="form-control mb-4" id="input2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {!isPending && <button type="submit" className="btn btn-outline-danger">Submit</button>}
                            {isPending && <button type="button" className="btn btn-outline-danger">Loading</button>}
                            {error && <div className="alert alert-danger">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
