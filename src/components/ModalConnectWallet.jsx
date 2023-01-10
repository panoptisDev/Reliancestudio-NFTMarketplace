import { React, useState, Fragment } from "react";
import { Transition, Menu } from '@headlessui/react'
import { ReactComponent as Close } from "../assets/close.svg"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { Tab } from '@headlessui/react'
import "./ModalConnectWallet.css"

import MetaMask from "../assets/icons/ConnectWallet/Ethereum/metamask.png"
import WalletConnect from "../assets/icons/ConnectWallet/Ethereum/walletconnect.png"
import Coinbase from "../assets/icons/ConnectWallet/Ethereum/coinbase.svg"
import CryptoCom from "../assets/icons/ConnectWallet/Ethereum/cryptocom.png"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ModalConnectWallet = ({ active, setActive, onConnectMetamask, onConnectWalletConnect, onConnectCoinbase }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] h-[640px] lg:max-h-[700px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Connect a wallet <br /> to continue</p>
                    </div>
                    <div>
                        <div className="mt-[20px]">
                            <Tab.Group as="div">
                                <Tab.List className="flex items-center justify-center space-x-2">
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                selected
                                                    ? 'text-base font-gilroy tracking-wide text-white border-2 border-[#3b3c3c] w-[130px] h-[56px] rounded-[52px]'
                                                    : 'text-base font-gilroy tracking-wide text-white border-none border-transparent w-[130px] h-[56px] bg-[#1e1f1f] rounded-[52px]'
                                            )
                                        }
                                    >
                                        Ethereum
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels as={Fragment}>
                                    <Tab.Panel className="pb-[40px] lg:pb-[50px]">
                                        <button onClick={onConnectMetamask} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] hover:bg-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[30px] lg:mt-[40px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={MetaMask}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">MetaMask</p>
                                        </button>
                                        <button onClick={onConnectWalletConnect} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] hover:bg-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={WalletConnect}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">WalletConnect</p>
                                        </button>
                                        <button onClick={onConnectCoinbase} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] hover:bg-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={Coinbase}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">Coinbase</p>
                                        </button>
                                        <button onClick={onConnectWalletConnect} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] hover:bg-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={CryptoCom}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">Crypto.com</p>
                                        </button>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalConnectWallet;