import { ReactNode } from 'react';
import { Logo } from '../../assets/images/Logo';
import CartIcon from '../../assets/icons/CartIcon';
import RoundedImage from '../../assets/images/RoundedImage';
import avatar from '../../assets/images/image-avatar.png';

type NavbarLinks = {
  key: string;
  text: ReactNode;
}[];

const links: NavbarLinks = [
  {
    text: 'Collections',
    key: 'Collections',
  },

  {
    text: 'Men',
    key: 'Men',
  },

  {
    text: 'Women',
    key: 'Women',
  },

  {
    text: 'About',
    key: 'About',
  },

  {
    text: 'Contact',
    key: 'Contact',
  },
];

export function Navbar() {
  return (
    <>
      <nav className='flex gap-12 items-center justify-between'>
        <div className='flex gap-x-14'>
          <div>
            <Logo />
          </div>

          <ul className='flex gap-7'>
            {links.map((link) => (
              <li className='' key={link.key}>
                {link.text}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex gap-8 items-center'>
          <CartIcon />
          <RoundedImage
            src={avatar}
            isAriaHidden
            size={50}
            alt='Imagem de perfil'
          />
          {/* icone de carrinho */}
          {/* foto*/}
        </div>
      </nav>
      <div className='w-full h-px bg-grayish-blue mt-10'></div>
    </>
  );
}
