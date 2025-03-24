import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="mb-3">{isLogin ? 'Login' : 'Register'}</h3>
            <form>
              {!isLogin && <input type="text" className="form-control mb-3" placeholder="Full Name" />}
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <input type="password" className="form-control mb-3" placeholder="Password" />
              {!isLogin && <input type="password" className="form-control mb-3" placeholder="Confirm Password" />}
              <button type="submit" className="btn btn-primary w-100 mb-3">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;