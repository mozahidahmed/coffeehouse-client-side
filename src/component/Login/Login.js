import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';

import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';





const Login = () => {



//GOOGLE SIGNIN START..............................................

 const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
 const { register, formState: { errors }, handleSubmit } = useForm(); 
 const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
   
const navigate=useNavigate();
const location=useLocation();


// const [token]=useToken(user || googleUser)
let from=location.state?.from?.pathname || "/"


let signInError;



//.........................................
if(loading || googleLoading){
  return <Loading></Loading>

}
//........................................................    
if(googleError || error){

  signInError=<p>{error?.message || googleError?.message}</p>
}
//............................................

//token..................





if(user || googleUser){
  navigate(from,{replace:true})
}

 // GOOGLE SIGNIN END...........................................




//ON SUBMIT...............................................................
const onSubmit = data => 
{
  signInWithEmailAndPassword(data.email, data.password);
  
}
//.........................................................................................
    return (
      <div className='flex justify-center items-center mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

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



      <p className="text-red-500">{signInError}</p>
      <input type="submit" className='btn  w-full max-w-xs' value="Login"/>
      <p className='text-black-500 font-bold'>New coffeeHouse?<Link to="/register"><span className='text-green-400'>..Create New Acccotunt</span></Link></p>
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

export default Login;