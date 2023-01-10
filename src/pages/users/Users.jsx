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
        <tr>
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
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Users</p>
        <table className="users_table">
           <tr>
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
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Users;