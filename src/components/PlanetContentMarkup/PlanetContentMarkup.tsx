// src/components/PlanetContentMarkup/PlanetContentMarkup.tsx
import type { Planet, PlanetSection } from '../../types';
import sourceIcon from '../../assets/icons/icon-source.svg';
import './PlanetContentMarkup.css';

type PlanetContentMarkupProps = {
   planet: Planet;
   section: PlanetSection;
};

export function PlanetContentMarkup({
   planet,
   section,
}: PlanetContentMarkupProps) {
   const sectionData = planet[section];

   return (
      <section
         className='planet__content'
         role='tabpanel'
         id={`panel-${section}`}
         aria-labelledby={`tab-${section}`}
      >
         <h1 className='planet__name'>{planet.name}</h1>

         <p className='planet__description'>{sectionData.content}</p>

         <p className='planet__source'>
            <span>Source: </span>
            <a href={sectionData.source} target='_blank' rel='noreferrer'>
               Wikipedia
            </a>
            <img
               className='planet__source-icon'
               src={sourceIcon}
               alt=''
               aria-hidden='true'
            />
         </p>
      </section>
   );
}
