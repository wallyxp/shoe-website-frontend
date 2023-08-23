import {footerLogo} from "../assets/images/index.js";
import {socialMedia} from "../constants/index.js";
import {footerLinks} from "../constants/index.js";
import FooterLinkComp from "../components/FooterLinkComp.jsx";
import {BiCopyright} from "react-icons/bi"
const Footer = () =>{
    return (
        <footer>
            <div className={"flex md:flex-row flex-col items-center justify-between"}>
                <section className={"sm:pr-10"}>
                    <img
                        src={footerLogo}
                        alt={"footerLogo"}
                        className={"p-1"}
                    />
                    <p className={"text-white font-montserrat mt-5 text-sm leading-7"}>Get shoes ready for the new term at your
                        <br/> nearest Nike Store. Find your perfect Size in
                        <br/>Store. Get Rewards.
                    </p>
                    <section className={"flex mt-5"}>
                        {
                            socialMedia.map((social, index)=>(
                                <div
                                    key={index}
                                    className={"flex bg-white h-10 w-10 justify-center items-center m-3 rounded-full"}
                                >
                                    <img
                                        src={social.src}
                                        alt={social.alt}
                                        className={"p-1"}
                                    />
                                </div>
                            ))
                        }
                    </section>
                </section>

                <section className={"flex max-md:mt-12"}>
                    {
                        footerLinks.map((footerLink, index)=>(
                            <div key={index}>
                                <FooterLinkComp title={footerLink.title} links={footerLink.links}/>
                            </div>
                        ))
                    }
                </section>

            </div>
            <h2 className={"text-white flex items-center pt-5 font-montserrat text-[12px] tracking-wide "}><BiCopyright/> <span> Copyrights. All rights reserved. </span></h2>
        </footer>
    )
}

export default Footer