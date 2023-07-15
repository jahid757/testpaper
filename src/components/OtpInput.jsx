import { Button, Card } from '@material-tailwind/react';
import React from 'react';
import OTPInput from 'react-otp-input';

const OtpInput = ({otp,setOtp,verifyOtp}) => {
    return (
        <div className=" flex flex-col h-[100%] p-2">
        <Card className='p-2 otp'>
        <h2 className='mb-3 text-center text-[24px] font-[600]'>Verify Otp</h2>
            <OTPInput
        
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} />}
      />
        <Button className='primary_btn py-3' onClick={verifyOtp}>Verify</Button>
        </Card>
        </div>
    );
}

export default OtpInput;
