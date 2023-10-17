import React from 'react'

const Contact = () => {
    return (
        <div className='px-96 py-40 flex justify-center items-center gap-11 dark:bg-gray-900 dark:text-gray-200'>
            <div className='bg-gray-100 font-semibold p-10 rounded-xl dark:bg-gray-800 dark:text-white'>
                <h1 className='text-4xl font-extrabold'>Get in touch:</h1>
                <h2 className='text-gray-700 text-xl my-2 dark:text-gray-300'>Fill in the form to start a conversation</h2>
                <div className='flex flex-col gap-3'>
                <div className='flex gap-3 items-center mt-5'>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500 dark:text-gray-300"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <p className='text-gray-700 dark:text-gray-300'>Acme Inc, Street, <br /> State, Postal Code</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500 dark:text-gray-300"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    <p className='text-gray-700 dark:text-gray-300'>+44 1234567890</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500 dark:text-gray-300"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <p className='text-gray-700 dark:text-gray-300'>info@acme.org</p>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
                <input type="text" placeholder='Full Name' className='border-2 bg-white text-gray-500 rounded-lg px-3 py-2 outline-none w-72 font-semibold'/>
                <input type="text" placeholder='Email' className='border-2 bg-white text-gray-500 rounded-lg px-3 py-2 outline-none w-72 font-semibold'/>
                <input type="text" placeholder='Telephone Number' className='border-2 bg-white text-gray-500 rounded-lg px-3 py-2 outline-none w-72 font-semibold'/>
                <button className='bg-green-400 text-white px-5 py-2 rounded-lg font-semibold'>Submit</button>
            </div>
        </div>
    )
}

export default Contact
