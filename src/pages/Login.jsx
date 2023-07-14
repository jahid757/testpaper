import React, {  } from 'react';
import Container from '../components/Container';
import { Button } from '@material-tailwind/react';

const Login = () => {
    // const [name,setName] = useState('');

    return (
        <Container>
            <div style={{minHeight:" 90% !important"}} className=" h-100 justify-content-center flex-column d-flex">
            <form autoComplete="off" className="needs-validation card mt-3 container">
               
                <h3 className="text-center heading_text">Login</h3>
            
                <div className="single_input">
                    <span className="material-symbols-outlined">
                        call
                        </span>
                    <input autoComplete="off" type="tel" placeholder="Mobile" required className="form-control"/>
                </div>
            
            
                <div className="single_input">
                    <span className="material-symbols-outlined">
                        lock
                        </span>
                    <input autoComplete="off" type="password" placeholder="Password" required className="form-control"/>
                </div>
            
                <div className="condition pt-2">
                    <div className="d-sm-flex align-items-center justify-content-between">
                    <label className="d-flex align-items-sm-center gap-2" htmlFor="role"><input type="checkbox" name="role" id="role"/>Remember me</label>
                        <label className="mt-0" htmlFor="login"><a href="/">Forget Password</a></label>
                    </div>
                    <Button type="submit" className="primary_btn py-3">Login</Button>
                    <label className="mt-2 text-center d-block" htmlFor="login">Don't have an account? <a href="/register">Register</a></label>
                </div>
            </form>
        </div>
        </Container>
    );
}

export default Login;