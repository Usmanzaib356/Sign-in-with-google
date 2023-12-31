import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Signin() {

    const nav = useNavigate()

  const success = (res) => {
    console.log(res);
    nav("/main")

  };

  const err = (err) => {
    console.log(err);
  };

  return (
    <>
      <div className='w-100 mx-20 grid place-content-center h-screen  '>
        <form className='w-72'>
          <div className='mb-6'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>
          <div className='py-5 bg-white'>
            <GoogleOAuthProvider clientId='851467543053-be5346mc6c5nnbme6s72pcrfbsjf4jjr.apps.googleusercontent.com'>
              {/* Make sure GoogleLogin is wrapped inside GoogleOAuthProvider */}
              <GoogleLogin onSuccess={success} onError={err}>
                Sign in with Google
              </GoogleLogin>
            </GoogleOAuthProvider>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
