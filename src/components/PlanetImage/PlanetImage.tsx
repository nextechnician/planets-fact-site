// src/components/PlanetImage/PlanetImage.tsx
import type { Planet, PlanetSection } from '../../types';
import './PlanetImage.css';

type PlanetImageProps = {
   planet: Planet;
   section: PlanetSection;
};

export function PlanetImage({ planet, section }: PlanetImageProps) {
   const planetImageSrc =
      section === 'structure' ? planet.images.internal : planet.images.planet;

   const showGeologyOverlay = section === 'geology';

   return (
      <div className='planet__visual'>
         <img
            className='planet__image'
            src={planetImageSrc}
            alt={planet.name}
         />

         {showGeologyOverlay && (
            <img
               className='planet__geology'
               src={planet.images.geology}
               alt=''
               aria-hidden='true'
            />
         )}
      </div>
   );
}
