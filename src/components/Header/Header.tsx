import type { Planet } from '../../types.ts';
import type { CSSProperties } from 'react';
import hamburgerIcon from '../../assets/icons/icon-hamburger.svg';

import './Header.css';

type HeaderProps = {
   planets: Planet[];
   currentPlanetName: string;
   onPlanetChange: (planetName: string) => void;

   isMobileMenuOpen: boolean;
   onToggleMobileMenu: () => void;
};

export const Header = ({
   planets,
   currentPlanetName,
   onPlanetChange,
   isMobileMenuOpen,
   onToggleMobileMenu,
}: HeaderProps) => {
   return (
      <div className='header'>
         <div className='header__inner'>
            <a className='header__logo' href='/' aria-label='The Planets home'>
               The Planets
            </a>

            <nav className='header__nav' aria-label='Planets'>
               <ul className='header__list'>
                  {planets.map((p) => {
                     const dotColor = `var(--clr-planet-${p.name.toLowerCase()})`;

                     return (
                        <li key={p.name} className='header__item'>
                           <button
                              type='button'
                              className='header__link'
                              style={
                                 { '--dot-color': dotColor } as CSSProperties
                              }
                              aria-current={
                                 p.name === currentPlanetName
                                    ? 'page'
                                    : undefined
                              }
                              onClick={() => onPlanetChange(p.name)}
                           >
                              {p.name}
                           </button>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <button
               type='button'
               className='header__toggle'
               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
               aria-expanded={isMobileMenuOpen}
               aria-controls='mobile-menu'
               onClick={onToggleMobileMenu}
            >
               <span aria-hidden='true'>
                  <img src={hamburgerIcon} alt='' />
               </span>
            </button>
         </div>
      </div>
   );
};
