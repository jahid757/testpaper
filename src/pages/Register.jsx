import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  // Option,
  // Select,
  Checkbox,
  Radio,
  // Button,
  // Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import OtpInput from "../components/OtpInput";

const Register = () => {
  const [gender,setGender] = useState('male')
  const [classname_id,setClassNameId] = useState('8')
  const [otpAllow,setOtpAllow] = useState(false)
  const [mobile,setMobile] = useState('')
  const [authKey,setAuthKey] = useState('')
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const updatedData = {...data,gender,classname_id}
    setMobile(data.mobile)
    fetch('https://testpaper.xyz/api/register',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(updatedData)
    }).then((res) => res.json()).then((data) => {
      if(data.access_token){
        setOtpAllow(true)
        setAuthKey(data.access_token)
      }else{
        setOtpAllow(false)
        
      }
    })
  }
  
  const [otp, setOtp] = useState('');

  const verifyOtp = () => {
    fetch('https://testpaper.xyz/api/otp-verify-code',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        "Authorization":`Bearer ${authKey}`
      },
      body:JSON.stringify({verify_code:otp,mobile:mobile})
    }).then((res) => res.json()).then((data) => {
      console.log('otp',otp,mobile)
    })
    console.log('otp missing')
  }
  return (
    <Container>
      <div
        style={{ minHeight: " 90% !important" }}
        className=" h-100 justify-center  flex-column d-flex"
      >
        {
          otpAllow ? 
          
          <OtpInput verifyOtp={verifyOtp} otp={otp} setOtp={setOtp}/>
        :
        <Card>

        <form
          autoComplete="off"
          className="needs-validation container py-2"
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: "13px "}}
        >
          <h3 className="text-center heading_text">Registration</h3>

          <div className="single_input">
            <span className="material-symbols-outlined">person</span>
            <input
            required
              autoComplete="off"
              className="form-control"
              type="text" placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Name is required</span>}
          </div>










          <div className="single_input">
            <span className="material-symbols-outlined">call</span>
            <input
            required
              autoComplete="off"
              type="text"
              placeholder="Mobile"
              className="form-control"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && <span>Mobile is required</span>}
          </div>

          {/* <div className="single_input">
            <span className="material-symbols-outlined">mail</span>
            <input
            required
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.email && <span>Email is required</span>}
          </div> */}

          <div className="mt-2">
            <div className="flex gap-10 ">
              <Radio  id="male" name="gender" label="Male" defaultChecked onClick={() => setGender('male')} />
              <Radio  id="female" name="gender" label="Female" onClick={() => setGender('female')}  />
          </div>
          </div>

          {/* <div className="single_input">
            <Select label="Profession">
        <Option>Banker</Option>
        <Option>Developer</Option>
      </Select>
          </div> */}

          <div className="single_input">
          <span className="material-symbols-outlined">
school
</span>
            <input
            {...register("class", { required: true })}
              autoComplete="off"
              type="text"
              placeholder="Class"
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
              placeholder="Password"
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
            <label
              className="d-flex mt-2 align-items-sm-center align-items-start gap-2"
              htmlFor="role"
            >
              <Checkbox label="Agree with " />
              <p> <Link href="/">Terms & Conditions</Link></p>
            </label>
            {/* <button type="submit" >
              Registration
            </button> */}
            <Button className="primary_btn py-3" type="submit">Registration</Button>
            <label className="mt-2 text-center d-block" htmlFor="login">
              Already have an account? <a href="/login">login</a>
            </label>
          </div>
        </form>
        </Card>
        }
      </div>
    </Container>
  );
};

export default Register;
