import React, { useContext } from 'react';
import Container from '../components/Container';
import { Button } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../App';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    // const [name,setName] = useState('');
    const [user, setUser] = useContext(UserContext)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        fetch('https://testpaper.xyz/api/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(data)
        }).then(response => response.json())
        .then(response => {
            setUser(response.userData)
            setAuthKeyInLocal(response.access_token)
        })
        .catch(error => console.log('error', error));
      }
      const setAuthKeyInLocal = (key) => {
        localStorage.setItem('key',key)
    }
    if (user) {
        return <Navigate to="/" />;
    }
    return (
        <Container>
            <div style={{minHeight:" 90% !important"}} className=" h-100 justify-content-center flex-column d-flex">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="needs-validation card mt-3 container py-2">
               
                <h3 className="text-center heading_text">Login</h3>
            
                <div className="single_input">
                    <span className="material-symbols-outlined">
                        call
                        </span>
                    <input {...register("mobile", { required: true })} autoComplete="off" type="tel" placeholder="Mobile" required className="form-control"/>
                </div>
            
            
                <div className="single_input">
                    <span className="material-symbols-outlined">
                        lock
                        </span>
                    <input {...register("password", { required: true })} autoComplete="off" type="password" placeholder="Password" required className="form-control"/>
                </div>
            
                <div className="condition pt-2">
                    <div className="d-sm-flex align-items-center justify-content-between">
                    <label className="d-flex align-items-sm-center gap-2" htmlFor="role"><input type="checkbox" name="role" id="role"/>Remember me</label>
                        <label className="mt-0" htmlFor="login"><Link to="/reset-password">Forget Password</Link></label>
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
