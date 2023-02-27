import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hook/useAuthentication';

function Register() {
  const [error, setError] = useState(null)

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const [success, setSuccess] = useState(null)


  const {createUser, loading, error: authError} = useAuthentication()

  const handleNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleTermsAgreedChange = (event) => {
    setTermsAgreed(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      displayName,
      email,
      password
    }
    if (password !== passwordConfirmation) {
      return alert('As senhas precisam ser iguais');
    }
  
    if (!displayName || !email || !password || !passwordConfirmation || !termsAgreed) {
      return alert('Por favor, preencha todos os campos');
    }


    if (password !== passwordConfirmation) {
      return alert('As Senhas tem que ser iguais')
    }
    const res = await createUser(user)
    setSuccess(<div class="alert alert-success" role="alert">Cadastrado com Sucesso!</div>)
  };

  useEffect(() => {
    
    if(authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={displayName}
                            onChange={handleNameChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                          <label
                      className="form-label"
                      htmlFor="form3Example4c"
                    >
                      Your Password
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="form3Example4cd"
                      className="form-control"
                      value={passwordConfirmation}
                      onChange={handlePasswordConfirmationChange}
                    />
                    <label
                      className="form-label"
                      htmlFor="form3Example4cd"
                    >
                      Confirm Password
                    </label>
                  </div>


                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3c"
                    checked={termsAgreed}
                    onChange={handleTermsAgreedChange}
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                  Check me out{" "}
                  </label>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Register
                  </button>
                </div>
                { error ? <div class="alert alert-danger text-center" role="alert">{error}</div> : success }

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
);
}

export default Register;