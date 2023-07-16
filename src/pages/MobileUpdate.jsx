import React, { useState } from 'react';
import Container from '../components/Container';
import { Button, Card, CardBody } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { updateMobile } from '../components/Call_API';

const MobileUpdate = () => {
    const [navigate,setNavigate] = useState(false)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const res = await updateMobile(data);
        console.log(res)
        // Swal.fire({
        //     icon: 'success',
        //     title: res,
        //     showConfirmButton: false,
        //     // timer: 1500
        //   })
        //   setNavigate(true)
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
        >
          <h3 className="text-center heading_text">Change Password</h3>

          










          







          <div className="single_input">
            <span className="material-symbols-outlined">call</span>
            <input
            {...register("mobile", { required: true })}
              autoComplete="off"
              type="text"
              placeholder="Mobile"
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

export default MobileUpdate;
