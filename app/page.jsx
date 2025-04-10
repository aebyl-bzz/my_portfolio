import Link from 'next/link';
import Image from 'next/image'


export default function Main() {
    return (
        <div>

            <div className="flex flex-col items-center p-40 justify-center text-white">
                <h1 className="text-4xl">Hi, I am Lucius Aeby!</h1>
                <p className="p-4">17y old Student at a vocational IT school in Switzerland CH</p>
                <a href="https://github.com/aebyl-bzz" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/github-icon-2.svg"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </a>

            </div>


            <div className="w-[calc(100%-10rem)] h-1 bg-purple-900 mx-20"></div>


            <div className="text-white p-6">
                <h1 className="flex flex-col justify-center items-center p-4 text-3xl" id="about-me">ABOUT ME</h1>

                <div className="flex flex-row items-center justify-center px-10 gap-20 p-6">


                    <Image
                        className="rounded-md"
                        src="/PortfolioAebyLucius.jpeg"
                        width={300}
                        height={400}
                        alt="Picture of the author"
                    />


                    <div className="flex flex-col ">
                        <h2 className="text-2xl mb-4">Lucius Aeby</h2>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
            <a
                    href="/cv.pdf"
                    download
                    className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-2xl transition duration-300"
                >
                    Download CV
                </a>
            </div>

            <div className="flex flex-col items-center justify-center text-white p-6">
                <h1 id="projects">PROJECTS</h1>
            </div>
        </div>
    );
}