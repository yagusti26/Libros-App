import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {

  return (
    <footer className="p-4 bg-gray-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.linkedin.com/in/yasminagusti/" class="hover:underline">YasAgusti</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6  ">
                <FacebookOutlinedIcon />
            </a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                <InstagramIcon />
            </a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                <TwitterIcon />
            </a>
        </li>
        <li>
            <a href="#" className="hover:underline ">
                <PinterestIcon />
            </a>
        </li>
    </ul>
</footer>
  )
}

export default Footer