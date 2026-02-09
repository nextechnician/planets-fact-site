// src/App.tsx
import { useMemo, useState } from 'react';

import planetsData from './data/data.json';
import type { Planet, PlanetSection } from './types';

import { Header } from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { PlanetLayout } from './components/PlanetLayout/PlanetLayout.tsx';
import { PlanetStats } from './components/PlanetStats/PlanetStats';
import './animations/stars.css';

const planets = planetsData as Planet[];

const DEFAULT_PLANET = 'Earth';
const DEFAULT_SECTION: PlanetSection = 'overview';

function App() {
   const [currentPlanetName, setCurrentPlanetName] = useState(DEFAULT_PLANET);
   const [currentSection, setCurrentSection] =
      useState<PlanetSection>(DEFAULT_SECTION);

   const currentPlanet = useMemo(() => {
      const match = planets.find((p) => p.name === currentPlanetName);
      if (match) return match;

      const earth = planets.find((p) => p.name === DEFAULT_PLANET);
      return earth ?? planets[0];
   }, [currentPlanetName]);

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   function handlePlanetChange(nextPlanetName: string) {
      setCurrentPlanetName((prev) => {
         if (prev !== nextPlanetName) setCurrentSection(DEFAULT_SECTION);
         return nextPlanetName;
      });
      setIsMobileMenuOpen(false);
   }

   function handleToggleMobileMenu() {
      setIsMobileMenuOpen((open) => !open);
   }

   function handleCloseMobileMenu() {
      setIsMobileMenuOpen(false);
   }

   return (
      <div className='page__layout' data-planet={currentPlanetName}>
         <header className='site__header'>
            <Header
               planets={planets}
               currentPlanetName={currentPlanetName}
               onPlanetChange={handlePlanetChange}
               isMobileMenuOpen={isMobileMenuOpen}
               onToggleMobileMenu={handleToggleMobileMenu}
            />

            <MobileMenu
               planets={planets}
               currentPlanetName={currentPlanetName}
               isOpen={isMobileMenuOpen}
               onSelectPlanet={handlePlanetChange}
               onClose={handleCloseMobileMenu}
            />
         </header>

         <main className='page'>
            <div className='planet__container'>
               <PlanetLayout
                  planet={currentPlanet}
                  section={currentSection}
                  onSectionChange={setCurrentSection}
               />
            </div>

            <div className='page__stats'>
               <PlanetStats planet={currentPlanet} />
            </div>
         </main>
      </div>
   );
}

export default App;
