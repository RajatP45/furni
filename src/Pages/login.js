import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/header';
import Footer from '../Component/footer';

export default function login() {
  return (
    <>
      <Header />
       {/* <!-- Start Hero Section --> */}
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Sign In</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}
		<div class="untree_co-section">
            <div class="container">
            <div class="row">
            <form className='w-50'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control w-50" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check mt-2">
                    <label class="form-check-label" for="exampleCheck1"><Link><span className='register'>Forget Password </span></Link></label>
                </div>
                <div class="form-group form-check mt-2">
                    <label class="form-check-label" for="exampleCheck1">Not a member? <Link to="/signup"><span className='register'>Sign Up</span></Link></label>
                </div>
                <button type="submit" class="btn btn-primary mt-3 w-50">Submit</button>
                </form>
            </div>
            </div>
        </div>
      <Footer />
    </>
  )
}
