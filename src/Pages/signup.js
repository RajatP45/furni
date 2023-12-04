import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/header'
import Footer from '../Component/footer'
// import React, {useState,setState} from 'react';

export default function signup() {
    // const [firstName, setFirstName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [country, setCountry] = useState(null);
    // const [state, setState] = useState(null);
    // const [city, setcity] = useState(null);
    // const [address, setAddress] = useState(null);
    // const [phone, setPhone] = useState(null);
    // const [password,setPassword] = useState(null);

    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "firstName"){
    //         setFirstName(value);
    //     }
    //     if(id === "email"){
    //         setEmail(value);
    //     }
    //     if(id === "country"){
    //         setCountry(value);
    //     }
    //     if(id === "state"){
    //         setState(value);
    //     }
    //     if(id === "city"){
    //         setcity(value);
    //     }
    //     if(id === "address"){
    //         setAddress(value);
    //     }
    //     if(id === "phone"){
    //         setPhone(value);
    //     }

    //     if(id === "password"){
    //         setPassword(value);
    //     }

    // }

    // const handleSubmit  = () => {
    //     console.log(firstName,email,country,state,city,address,phone,password);
    // }
  return (
    <>
      <Header />
       {/* <!-- Start Hero Section --> */}
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Sign Up</h1>
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
                    <form className='w-50'>
                        <div class="row">
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    {/* <input type="email" class="form-control" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" aria-describedby="emailHelp" placeholder="Enter Full Name" /> */}
                                    <input type="email" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter Full Name" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email Address</label>
                                    {/* <input type="email" class="form-control" value={email} onChange = {(e) => handleInputChange(e)} id="email" aria-describedby="emailHelp" placeholder="Enter Email Address" /> */}
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Country</label>
                                    {/* <input type="email" class="form-control" value={country} onChange = {(e) => handleInputChange(e)} id="country" aria-describedby="emailHelp" placeholder="Enter your country name " /> */}
                                    <input type="email" class="form-control" id="country" aria-describedby="emailHelp" placeholder="Enter your country name " />

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">State</label>
                                    {/* <input type="email" class="form-control" value={state} onChange = {(e) => handleInputChange(e)} id="state" aria-describedby="emailHelp" placeholder="Enter your State name " /> */}
                                    <input type="email" class="form-control" id="state" aria-describedby="emailHelp" placeholder="Enter your State name " />                                
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">City</label>
                                    {/* <input type="email" class="form-control" value={city} onChange = {(e) => handleInputChange(e)} id="city" aria-describedby="emailHelp" placeholder="Enter your city name " /> */}
                                    <input type="email" class="form-control" id="city" aria-describedby="emailHelp" placeholder="Enter your city name " />

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address</label>
                                    {/* <input type="email" class="form-control" value={address} onChange = {(e) => handleInputChange(e)} id="address" aria-describedby="emailHelp" placeholder="Enter your Address" /> */}
                                    <input type="email" class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter your Address" />

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone</label>
                                    {/* <input type="email" class="form-control" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" aria-describedby="emailHelp" placeholder="Enter your Number" /> */}
                                    <input type="email" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter your Number" />

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    {/* <input type="password" class="form-control" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password" /> */}
                                    <input type="password" class="form-control" id="password" placeholder="Password" />

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example3cg" />
                                        <label class="form-check-label" for="form2Example3g">
                                            I agree all statements in <Link to="/signup"><span className="register">Terms of service</span></Link>
                                        </label>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div class="form-group form-check mt-2">
                                    <label class="form-check-label" for="exampleCheck1">Have already an account? <Link to="/login"><span className='register'>Sign In</span></Link></label>
                                </div>
                            </div>
                            {/* <button type="submit" onClick={()=>handleSubmit()} className="btn btn-primary mt-3 w-100">Submit</button> */}
                            <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>

                        </div>
                    </form> 
            </div>
        </div>
      <Footer />
    </>
  )
}
