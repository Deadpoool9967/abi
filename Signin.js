import './Signin.css';
import log from './st.png'
import lo from './abi1.png'


function Signin(){
    return(
<>
<div className='cont'>
<div className='left'>
  <img src={log}/>
</div>
<div className='middle'>
<div className='form'><center>
                        <h1 id="head1">Welcome</h1>
                        <h4 id="head">Log in to your Easyform</h4><br/></center>
                      <label for="uname"><b>Email</b></label><br/>
                      <input type="text" placeholder="Enter Email"className='name' required/><br/>
                  
                      <label for="psw"><b>Password</b></label><br/>
                      <input type="password" placeholder="Enter Password" className='name' required/><br/>
                      <center>   
                      <button className='button' type="submit">Login</button><br/></center>
                      <p className='forget'><u>Forget passowrd?</u></p>
                      <label>
                        <input type="checkbox"  name="remember"/> I understand and agree with the  <a className='a' href="#">Terms & Conditions</a> and  <a className='a'  href="#">Privacy Policy</a>
                      </label><br/>
                      
                      <lable><br/>
                        Doesn't have an account yet?<a className='a'  href="#">Sign up</a>
                      </lable>
                      </div>
</div>
<div className='right'>
<img src={lo} className='img2'/>
</div>
</div>

</>

    );

}
export default Signin;