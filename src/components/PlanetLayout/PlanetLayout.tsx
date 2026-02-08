// src/components/PlanetLayout/PlanetLayout.tsx
import type { Planet, PlanetSection } from '../../types';
import './PlanetLayout.css';

import { PlanetImage } from '../PlanetImage/PlanetImage';
import { PlanetContentMarkup } from '../PlanetContentMarkup/PlanetContentMarkup';
import { PlanetInformationTabs } from '../PlanetInformationTabs/PlanetInformationTabs';

type PlanetLayoutProps = {
   planet: Planet;
   section: PlanetSection;
   onSectionChange: (next: PlanetSection) => void;
};

export function PlanetLayout({
   planet,
   section,
   onSectionChange,
}: PlanetLayoutProps) {
   return (
      <section className='planet' aria-label={`${planet.name} information`}>
         <div className='planet__layout'>
            <PlanetImage planet={planet} section={section} />

            <div className='planet__details'>
               <PlanetContentMarkup planet={planet} section={section} />
            </div>

            <div className='info__tabs'>
               <PlanetInformationTabs
                  currentSection={section}
                  onSectionChange={onSectionChange}
               />
            </div>
         </div>
      </section>
   );
}
