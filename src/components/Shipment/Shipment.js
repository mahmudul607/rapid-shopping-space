import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { LoggedInUser } from '../../App';
import { Height } from '@mui/icons-material';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInUser)
    console.log(loggedInUser.name)
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <img className='img' src={loggedInUser.photo} alt="" />
      <input name="name" defaultValue={loggedInUser.name} {...register ("name", { required: true })}  placeholder='Your Name' />
      {errors.name && <span>This field is required</span>}
      <input email="Email" defaultValue={loggedInUser.email} {...register ("email", { required: true })}  placeholder='Your Email Address' />
      {errors.email && <span>Your Email Address is required</span>}
      <input address="Address" {...register ("address", { required: true })}  placeholder='Your Address' />
      {errors.address && <span>Your Address is required</span>}
      <input phone="Phone" {...register ("phone", { required: true })}  placeholder='Your Phone Number' />
      {errors.phone && <span>Your phone number is required</span>}
      <input type="submit"/>
    </form>
  );
};

export default Shipment;