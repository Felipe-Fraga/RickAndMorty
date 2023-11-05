import { IoMdContact } from 'react-icons/io'
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { LiaNewspaper } from 'react-icons/lia'
import { FiGithub } from 'react-icons/fi'

export const Footer = () => {
    return (
        <footer className="text-light body-font w-[80%] mx-auto my-8 border-t-[2px] border-light py-4">
            <div className="flex items-center sm:flex-row flex-col md:justify-between">
                <p className="flex title-font font-medium items-center md:justify-start justify-center hidden md:inline">
                    <IoMdContact size={32} className='hidden md:inline'/>
                </p>
                <div>
                <div className="flex space-x-4 text-details">
            <a href='https://github.com/Felipe-Fraga' target='blank'>
                <FiGithub className="w-8 h-8" />
            </a>

            <a href='https://www.linkedin.com/in/felipefraga/' target='blank'>
                <AiOutlineLinkedin className="w-8 h-8" />
            </a>

            <a href='https://mail.google.com/mail/u/0/?hl=es#inbox?compose=CllgCJqVwLvdQkRWpcfclXJRrDcCMBjnLgChdWdxqNvGzlDNZmDcRlZXPCbWdfBNBpRkvcJQZkL' target='blank'>
                <AiOutlineMail className="w-8 h-8" />
            </a>

            <a href='https://docs.google.com/document/d/1hWIm0BhlkGDjETVYOfEAML94BxMgs3kQvgYBq1H2IY4/edit#heading=h.uhqjkfyivtwf' target='blank'>
                <LiaNewspaper className="w-8 h-8" />
            </a>
        </div>                </div>
            </div>
        </footer>

    )
}
