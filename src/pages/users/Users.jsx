import { React, useState, useEffect } from "react";
import Footer from "../../components/Footer"
import axios from 'axios';
import { config } from '../../config';
import "./users.css";

const Users = ({ web3, account }) => {

  const [users, setUsers] = useState([]);

  const fetch = () => {

    axios.get(`${config.api}/users/users`)
      .then((response) => {
        const users = response.data;
        setUsers(users);
      });

  }

  useEffect(() => {

    fetch();

  }, [web3, account]);

  const usersHtml = users.map((col, i) => {

    return (
      <tr className="font-gilroy font-semibold">
        <td>{i + 1}</td>
        <td>{col.name}</td>
        <td>{col.email}</td>
        <td>{col.address} </td>
        <td>{(col.serviceBalance).toFixed(4)} ETH</td>
      </tr>
    )
  });

  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 pr-5 lg:pr-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Users</p>
        <div className="xl:hidden flex flex-row items-center mt-4">
          <p className="text-[#888888] text-[19px] font-gilroy font-semibold">Scroll the table to the right</p>
          <svg className="w-5 h-5 ml-1" fill="#888888" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>
        </div>
        <div className="w-full overflow-x-scroll horizontal_slider border-2 border-[#3b3c3c] rounded-xl pl-2 py-2 mt-3 lg:mt-[30px]">
          <table className="users_table lg:ml-1">
            <tr className="text-[#888888] text-[17px] font-gilroy font-semibold">
              <td>Index</td>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
              <td>Service balance</td>
            </tr>
            {
              usersHtml
            }
          </table>
        </div>
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Users;