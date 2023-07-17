import React, { useState } from 'react';
import Container from '../components/Container';
import { Button, Card, CardBody } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { updatePassword } from '../components/Call_API';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const PasswordEdit = () => {
    const [navigate,setNavigate] = useState(false)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        console.log(data)
        const res = await updatePassword(data);
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            // timer: 1500
          })
          setNavigate(true)
      }
      if(navigate){
        return <Navigate to="/profile"/>
      }
    return (
        <Container>
            <div className="h-100 flex-col justify-center flex">
            <Card className='m-2'>
                <CardBody>
                <form
          autoComplete="off"
          className="needs-validation container py-2"
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: "13px "}}
        >
          <h3 className="text-center heading_text">Change Password</h3>

          










          







          <div className="single_input">
            <span className="material-symbols-outlined">lock</span>
            <input
            {...register("old_password", { required: true })}
              autoComplete="off"
              type="password"
              placeholder="Current Password"
              required
              className="form-control"
            />
          </div>

          <div className="single_input">
            <span className="material-symbols-outlined">lock</span>
            <input
            {...register("password", { required: true })}
              autoComplete="off"
              type="password"
              placeholder="New Password"
              required
              className="form-control"
            />
          </div>

          <div className="single_input">
            <span className="material-symbols-outlined">lock</span>
            <input
            {...register("password_confirmation", { required: true })}
              autoComplete="off"
              type="password"
              placeholder="Confirm Password"
              required
              className="form-control"
            />
          </div>
          <div className="condition">
            <Button className="primary_btn py-3" type="submit">Update</Button>
          </div>
        </form>
                </CardBody>
            </Card>
            </div>
        </Container>
    );
}

export default PasswordEdit;
