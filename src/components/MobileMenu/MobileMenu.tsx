import type { Planet } from '../../types.ts';
import chevronIcon from '../../assets/icons/icon-chevron.svg';
import './MobileMenu.css';

type Props = {
   planets: Planet[];
   currentPlanetName: string;
   isOpen: boolean;
   onSelectPlanet: (planetName: string) => void;
   onClose: () => void;
};

export function MobileMenu({
   planets,
   currentPlanetName,
   isOpen,
   onSelectPlanet,
   onClose,
}: Props) {
   if (!isOpen) return null;

   return (
      <nav
         id='mobile-menu'
         className='mobile__menu'
         aria-label='Planet selection'
      >
         <ul role='list'>
            {planets.map((planet) => {
               const isActive = planet.name === currentPlanetName;

               const dotColor = `var(--clr-planet-${planet.name.toLowerCase()})`;

               return (
                  <li
                     key={planet.name}
                     style={{ '--dot-color': dotColor } as React.CSSProperties}
                  >
                     <span className='planet__dot' />
                     <button
                        type='button'
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => {
                           onSelectPlanet(planet.name);
                           onClose();
                        }}
                     >
                        {planet.name}
                     </button>
                     <img className='chevron' src={chevronIcon} alt='' />
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
