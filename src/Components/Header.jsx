import myImage from '../assets/globe-solid.svg'

export default function Header() {
    return (
        <section className="py-2 bg-[#F55A5A] flex justify-center space-x-4 h-16 ">
            <img className='text-white' src={myImage} />
            <h1 className="text-white self-center font-inter text-xl font-normal leading-relaxed">my travel journal</h1>        
        </section>
    )
}