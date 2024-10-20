"use client"

import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text">Hello, I am </span>
                <br/>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Milkiyas Gebru',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Software Engineer',
                        1000,
                        'Python Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}

                />
            </h1>
            <p className="text-[#ADB7BE] text-lg lg:text-xl">Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis netus mi sollicitudin, duis erat adipiscing morbi. Eget libero sociosqu dolor pellentesque platea eleifend sodales praesent. Condimentum pellentesque proin habitant pharetra pretium. </p>
            <div className="mt-2">
                <button className="px-6 py-3 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mr-4">Hire Me</button>
                <button className="px-6 py-3 bg-transparent border border-white rounded-full text-white">Download CV</button>
            </div>
        </section>
    );
}

export default HeroSection;