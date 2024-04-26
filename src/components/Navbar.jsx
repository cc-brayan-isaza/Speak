import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { logo } from "../assets/images";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <NavLink to='/'>
          <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
        </NavLink>

        {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          Speaking Project
        </h2> */}

        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
            Home
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
            About me
          </NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
            Hobbies
          </NavLink>
        </nav>
      </div>
    </motion.nav>
  );
};

export default Navbar;
