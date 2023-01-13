import React, { Fragment } from 'react'
import styles from './footer.module.css';
import { FaMapMarkerAlt,FaEnvelope} from 'react-icons//fa'
import { BsFillTelephoneFill} from 'react-icons//bs'
import { AiOutlineTwitter,AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons//ai';
const Footer = () => {
  return (
<Fragment>
<footer className={styles.footerDistributed}>

      <div className={styles.footerLeft}>

        <h3>Company<span>logo</span></h3>

        <p className={styles.footerLinks}>
          <a href="#" class="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
        </p>

        <p className={styles.footerCompanyName}>Company Name © 2023</p>
      </div>

      <div className={styles.footerCenter}>

        <div>
        <FaMapMarkerAlt className={styles.Icons}/>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
      <BsFillTelephoneFill className={styles.Icons}/>
          <p>+1.555.555.5555</p>
        </div>

        <div>
        <FaEnvelope className={styles.Icons}/>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div className={styles.footerRight}>

        <p className={styles.footerCompanyAbout}>
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className={styles.footerIcons}>

          <a href="#"><AiFillFacebook className={styles.Connect}/></a>
          <a href="#"><AiOutlineTwitter className={styles.Connect}/></a>
          <a href="#"><AiFillLinkedin className={styles.Connect}/></a>
          <a href="#"><AiFillGithub className={styles.Connect}/></a>

        </div>

      </div>

    </footer>

</Fragment>
  )
}

export default Footer