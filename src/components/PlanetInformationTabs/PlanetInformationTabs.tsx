// src/components/PlanetInformationTabs/PlanetInformationTabs.tsx
import type { PlanetSection } from '../../types';
import './PlanetInformationTabs.css';

type PlanetInformationTabsProps = {
   currentSection: PlanetSection;
   onSectionChange: (next: PlanetSection) => void;
};

export function PlanetInformationTabs({
   currentSection,
   onSectionChange,
}: PlanetInformationTabsProps) {
   return (
      <nav
         className='tab__label--container'
         role='tablist'
         aria-label='Planet information tabs'
      >
         <button
            type='button'
            role='tab'
            aria-selected={currentSection === 'overview'}
            aria-controls='panel-overview'
            id='tab-overview'
            onClick={() => onSectionChange('overview')}
         >
            <span className='mobile'>Overview</span>

            <span className='tablet__desktop'>
               <span className='tab__num' aria-hidden='true'>
                  01
               </span>
               <span className='tab__text'> Overview</span>
            </span>
         </button>

         <button
            type='button'
            role='tab'
            aria-selected={currentSection === 'structure'}
            aria-controls='panel-structure'
            id='tab-structure'
            onClick={() => onSectionChange('structure')}
         >
            <span className='mobile'>Structure</span>

            <span className='tablet__desktop'>
               <span className='tab__num' aria-hidden='true'>
                  02
               </span>
               <span className='tab__text'> Internal Structure</span>
            </span>
         </button>

         <button
            type='button'
            role='tab'
            aria-selected={currentSection === 'geology'}
            aria-controls='panel-geology'
            id='tab-geology'
            onClick={() => onSectionChange('geology')}
         >
            <span className='mobile'>Surface</span>

            <span className='tablet__desktop'>
               <span className='tab__num' aria-hidden='true'>
                  03
               </span>
               <span className='tab__text'> Surface Geology</span>
            </span>
         </button>
      </nav>
   );
}
