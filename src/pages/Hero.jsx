import React from 'react'
import Cards from "../assets/cards.png"
import { Link } from "react-router-dom";
import "./Hero.css"
import Footer from '../components/Footer'
import Launchpad from '../components/launchpad/launchpad';
import NftBlock from '../components/nftBlock/nftBlock';
import NftBlock2 from '../components/nftBlock/nftBlock2';
import Popular from '../components/popular/popular';
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"
import Darknes from '../assets/darknes.png'

const Hero = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <Blur className='absolute top-0 mt-[2260px] lg:mt-[2300px] blur-xl right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <Blur className='absolute top-0 mt-[2260px] lg:mt-[4430px] blur-xl right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <Blur className='lg:hidden absolute top-0 mt-[4430px] lg:mt-[2300px] blur-xl right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <Blur className='lg:hidden absolute top-0 mt-[4430px] lg:mt-[4430px] blur-xl right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <div className='lg:mt-24 flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
                <div className="relative block items-center lg:max-w-[1200px] overflow-hidden">
                    <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[904px] z-20 lg:w-[1200px] mt-[300px] lg:ml-[24px]">
                        <img
                            src={Cards}
                            alt="/"
                        />
                    </div>
                    <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[100px] mt-[70px] lg:mt-[64px]">
                        <img
                            src={Darknes}
                            alt="/"
                        />
                    </div>
                    <p className='relative z-40 font-gilroy -mt-[234px] lg:-mt-[263px] font-semibold text-[54px] leading-[56px] lg:text-[76px] text-center lg:leading-[76px] text-white'>Collection <br /> MutantGobz</p>
                    <div className='mt-[30px] text-center'>
                        <button className='relative w-[319px] z-40 lg:w-[210px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[17px] font-gilroy tracking-wide font-semibold before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden'>
                            <a href='/collection/0x494b98ddc2364dB88d48f170777C475DF6793097'>
                                Explore Collection
                            </a>
                        </button>
                    </div>
                </div>
                <div className="relative z-30 mt-[100px] lg:mt-[120px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Launchpad Drops</p>
                    <div className='flex flex-row justify-between mt-[20px] lg:mt-[30px]'>
                        <div className='block whitespace-nowrap space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[146px] h-[56px] bg-[#181818] hover:bg-[#232323] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent text-white rounded-[41px] text-base font-gilroy'>
                                <p>Next 7 days</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[158px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent text-base font-gilroy'>
                                <p>Coming soon</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[89px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent text-base font-gilroy'>
                                <p>Live</p>
                            </button>
                        </div>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <Link to="/launchpad" className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <Launchpad />
                        </div>
                    </div>
                </div>
                {
                    Popular
                }
                <div className="flex justify-center">
                    <Link to="/launchpad" className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                        See All
                    </Link>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>New to NFTs?</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="regular" />
                        </div>
                    </div>
                </div>
                {
                    <Popular />
                }
                <div className="relative z-30 flex justify-center">
                    <Link to="/collection" className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                        See All
                    </Link>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Upcoming Launches</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="upcomming" />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] leading-[40px] sm:leading-none font-gilroy font-semibold'>Top Marketcap Projects</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <Link to="/popular" className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy mt-2'>
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="marketcap" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/popular" className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                        See All
                    </Link>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>OG SOL Projects</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="ogsol" />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Most Followed NFT</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock2 type="followed" />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>MagicDAO Voted</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="voted" />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Highest Sales</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="highest" />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>New NFT</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <Link to="/new" className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy mt-2'>
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            <NftBlock type="newnft" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/new" className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                        See All
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Hero;