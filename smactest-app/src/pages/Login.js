import './Login.css'

export default function Login() {
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="card" style={{width: '30rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <div className="card-body">
                        <label htmlFor="input1">Email</label>
                        <input type="email" className="form-control mb-4" id="input1"/>
                        <label htmlFor="input2">Password</label>
                        <input type="text" className="form-control mb-4" id="input2"/>
                        <button type="button" className="btn btn-outline-danger">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
