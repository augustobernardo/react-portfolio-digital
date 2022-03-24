import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/augustobernardo" target="blank"><BsGithub/></a>
        <a href="https://www.instagram.com/guto_ooliveira/" target="blank"><MdEmail/></a>

    </div>
  )
}

export default HeaderSocial