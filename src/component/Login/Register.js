import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';



const Register = () => {


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm(); 
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    // const [token]=useToken( user || googleUser );
 
    const navigate=useNavigate();
    
      
   let signInError;
   

   if(user ||googleUser){
    navigate('/home');

   }
   
   //.........................................
   if(loading || googleLoading || updating){
     return <Loading></Loading>
   
   }
   //........................................................    
   if(googleError || error || updateError){
   
     signInError=<p>{error?.message || googleError?.message || updateError?.message}</p>
   }
   //............................................
   
   
  //  if(googleUser){
  //    console.log(googleUser);
  //    navigate('/appointment')
  //  }
   
    // GOOGLE SIGNIN END...........................................
   
   
   
   
   //ON SUBMIT...............................................................
   const onSubmit = async data => 
   {

    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName:data.name });
    
   toast.success('profile update done')


   }
   //.....




    return (
        <div className='flex justify-center items-center mt-16'>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Name</span>
        </label>
        <input type="text"
         placeholder="Write name" 
         class="input input-bordered w-full max-w-xs" 
         {...register("name", 
       
           {

          required:{
           value:true,
           message: 'name is required'

          },

        

          })} 
         />
        <label class="label">
        {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
       
        </label>
        </div>
       
       
       
        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Email</span>
        </label>
        <input type="email"
         placeholder="Write email" 
         class="input input-bordered w-full max-w-xs" 
         {...register("email", 
       
           {

          required:{
           value:true,
           message: 'email is required'

          },

          pattern: {
           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message:"Provide a valid email"
         }

          })} 
         />
        <label class="label">
        {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
        </div>
       


        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Password</span>
        </label>
        <input type="password"
         placeholder="Write password" 
         class="input input-bordered w-full max-w-xs" 
         {...register("password", {

          required:{ 
            value:true,
            message: 'password is required'

           },

          minLength: {
           value:6,
           message: 'Must Be a 6 Caracter'
          }

         })}
         />
        <label class="label">
        {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        </div>



  {signInError}
  <input type="submit" className='btn  w-full max-w-xs' value="Sign Up"/>
  <p className='text-black-500 font-bold'>Already Account..?<Link to="/login"><span className='text-green-400'>......login</span></Link></p>
</form>

      <div class="divider">OR</div>
      <button
       onClick={() =>signInWithGoogle()}
      class="btn btn-outline">Continue with Google</button>
    </div>
  </div>
  </div>
    );
};

export default Register ;