import React from 'react';
import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';



const SignUp = () => {
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
        <h1 className="text-4xl font-bold">Signup </h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="Enter Your password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Signup" />
        </div>
      </form>
      <p className="text-base text-center">Already have an account? <Link to="/login" className='text-orange-600'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;