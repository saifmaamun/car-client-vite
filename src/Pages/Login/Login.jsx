import React from 'react';
import image from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
    }



    return (
        <div className="hero py-20">
  <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
    <div className="text-center lg:text-left w-4/5">
      
      <img src={image} alt="" />
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-4xl font-bold">Login now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;