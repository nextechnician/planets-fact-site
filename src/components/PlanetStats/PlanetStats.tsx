import type { Planet } from '../../types';
import './PlanetStats.css';

type PlanetStatsProps = {
   planet: Planet;
};

export const PlanetStats = ({ planet }: PlanetStatsProps) => {
   return (
      <section className='planet__stats' aria-label='Planet statistics'>
         <dl>
            <div>
               <dt>Rotation Time</dt>
               <dd>{planet.rotation}</dd>
            </div>

            <div>
               <dt>Revolution Time</dt>
               <dd>{planet.revolution}</dd>
            </div>

            <div>
               <dt>Radius</dt>
               <dd>{planet.radius}</dd>
            </div>

            <div>
               <dt>Average Temp.</dt>
               <dd>{planet.temperature}</dd>
            </div>
         </dl>
      </section>
   );
};
