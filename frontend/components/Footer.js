import React from 'react'
import footStyles from '../styles/Footer.module.css'
import Link from 'next/link'


const Footer = () => {
    return (
		<div className={footStyles.main}>
				<div className={footStyles.hours}>
				<p>HOURS <br />
					MONDAY - FRIDAY: 8:00AM - 4:30PM <br />
					SATURDAY, SUNDAY: CLOSED <br />
					<strong>AFTER HOURS ON CALL</strong><br />
					PHONE <br />
					800.233.5307
				</p>
			</div>
			<div className={footStyles.footerNav}>
				<ul className={footStyles.footerUl}>
					<li><p className={footStyles.menuItem}  onclick="window.location.assign('/')">
						HOME</p></li>
					<li><p className={footStyles.menuItem}  onclick="window.location.assign('/about')">
						ABOUT</p></li>
					<li><p className={footStyles.menuItem}  onclick="window.location.assign('/location')">
						LOCATIONS</p></li>
					<li><p className={footStyles.menuItem}  onclick="window.location.assign('/meet')">
						FLEET</p></li>
					<li><p className={footStyles.menuItem}  onclick="window.location.assign('/policy')">
						POLICIES</p></li>
					<li><p className={footStyles.menuItem} onclick="window.location.assign('/contact')">
						CONTACT</p></li>
				</ul>
			</div>					
		</div>
	)
}

export default Footer