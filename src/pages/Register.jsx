import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Option,
  Select,
  Checkbox,
  Radio,
  // Button,
  // Typography,
} from "@material-tailwind/react";

const Register = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <div
        style={{ minHeight: " 90% !important" }}
        className=" h-100 justify-content-center flex-column d-flex"
      >
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
              autoComplete="off"
              type="text"
              placeholder="Mobile"
              className="form-control"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && <span>Mobile is required</span>}
          </div>

          <div className="single_input">
            <span className="material-symbols-outlined">mail</span>
            <input
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.email && <span>Email is required</span>}
          </div>

          <div className="mt-2">
          <div className="flex gap-10 ">
      <Radio  id="male" name="gender" label="Male" defaultChecked />
      <Radio  id="female" name="gender" label="Female"  />
    </div>
          </div>

          <div className="single_input">
            {/* <span className="material-symbols-outlined">work</span> */}
            <Select label="Profession">
        <Option>Banker</Option>
        <Option>Developer</Option>
      </Select>
          </div>

          <div className="single_input">
            <span className="material-symbols-outlined">lock</span>
            <input
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
      </div>
    </Container>
  );
};

export default Register;
