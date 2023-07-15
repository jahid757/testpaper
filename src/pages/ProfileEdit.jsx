import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { getUserData } from '../components/Call_API';
import { Button, Radio } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const ProfileEdit = () => {
    const [userData,setUserData] = useState({})
    const [gender,setGender] = useState('male');
    const [updateSuccessfully,setUpdateSuccessfully] = useState(false);
    const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()
      const userKey = localStorage.getItem("key");
    const loadSubject = async () => {
      if(typeof userKey === 'string' && userKey !== 'undefined'){
        const sub = await getUserData(userKey);
        setUserData(sub)
      }
    };
    useEffect(()=>{loadSubject()},[])
    const onSubmit = (data) => {
        const updatedData = {...data,gender}
        // console.log(updatedData)
        fetch('https://testpaper.xyz/api/profile/update',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept":"application/json",
            Authorization: `Bearer ${ userKey}`
          },
          body:JSON.stringify(updatedData)
        }).then((res) => res.json()).then((data) => {
          if(data.userData){
            setUpdateSuccessfully(true)
          }
        })
      }


      if (updateSuccessfully) {
        return <Navigate to="/profile" />;
    }

    return (
        <Container>
            <div className="h-100">
            <form
          autoComplete="off"
          className="needs-validation container py-2"
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: "13px "}}
        >
          <h3 className="text-center heading_text">Update Info</h3>

          <div className="single_input">
            <span className="material-symbols-outlined">person</span>
            <input
            required
              autoComplete="off"
              className="form-control"
              type="text" placeholder="Name"
              defaultValue={userData.name}
              {...register("name", { required: true })}
            />
          </div>










         


          <div className="mt-2">
            <div className="flex gap-10 ">
              {
                userData.gender === 'male' ? <Radio  id="male" name="gender" label="Male" defaultChecked onClick={() => setGender('male')} /> : <Radio  id="male" name="gender" label="Male" onClick={() => setGender('male')} />
              }
              {
                userData.gender === 'female' ? <Radio  id="female" name="gender" defaultChecked label="Female" onClick={() => setGender('female')}  /> : <Radio  id="female" name="gender" label="Female" onClick={() => setGender('female')}  />
              }
          </div>
          </div>



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
              defaultValue={userData.classname_id}
              className="form-control"
            />
          </div>

        
          <div className="condition">
            
            <Button className="primary_btn py-3" type="submit">Update</Button>
          </div>
        </form>
            </div>
        </Container>
    );
}

export default ProfileEdit;
