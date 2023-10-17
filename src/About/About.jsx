import React from 'react'

const About = () => {
  return (
    <div className='px-80 py-20 flex justify-between items-center dark:bg-gray-900 dark:text-white'>
      <img src="startup.png" height={570} width={570} />
      <div className='ml-10'>
        <h1 className='text-4xl font-bold'>React development is carried out by passionate developers</h1>
        <div className='my-9 flex flex-col gap-5 dark:text-gray-200'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
        <p>Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
    </div>
  )
}

export default About
