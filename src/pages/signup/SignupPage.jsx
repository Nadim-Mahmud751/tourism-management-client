import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    return (
        <section className='flex items-center justify-center app-container'>
            <section class="w-full md:w-[500px] py-section">
                <div class="w-full bg-white rounded-lg ">
                    <div class="">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     " placeholder="hero" required="" />
                            </div>
                            <div>
                                <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 ">Photo url</label>
                                <input type="text" name="photo" id="photo" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     " placeholder="https://photo.com/54121" required="" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     " required="" />
                            </div>
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