import React, { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { InputField } from '../../shared/components/input/InputField'

const SignupPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [password, setPassword] = useState('')
    return (
        <section className='flex items-center justify-center app-container'>
            <section class="w-full md:w-[500px] py-section">
                <div class="w-full bg-white rounded-lg ">
                    <div class="">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <InputField value={name} onChange={(e) => setName(e.target.value)} label={"Your name"} placeholder={""} />
                            <InputField value={email} onChange={(e) => setEmail(e.target.value)} label={"Your email"} placeholder={""} />
                            <InputField value={password} onChange={(e) => setPassword(e.target.value)} label={"Your password"} placeholder={""} />
                            <InputField value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} label={"Photo url"} placeholder={""} />
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-indigo-500 hover:underline ">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                            <hr />
                            <div className="flex items-center justify-center gap-x-4">
                                <button className='px-4 py-4 rounded-lg text-white bg-indigo-500'>
                                    <FaGoogle className='text-2xl' />
                                </button>
                                <button className='px-4 py-4 rounded-lg text-white bg-indigo-500'>
                                    <FaGithub className='text-2xl' />
                                </button>
                            </div>

                            <p class="text-sm font-light text-gray-500 ">
                                Already have an account yet? <Link to="/login" class="font-medium text-indigo-500 hover:underline ">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default SignupPage