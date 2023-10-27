import styles from './whatWeDoForTheEnvironment.module.css';
import { Feature } from './feature';

const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context('../../assets/whatWeDoForTheEnvironment', false, /\.(svg)$/));

export function WhatWeDoForTheEnvironment() {
  return (
    <div className={styles.whatWeDoForTheEnvironment}>
      <div className='container'>

        <h2>What we do for the environment</h2>

        <div className={styles.featureWrap}>
          <Feature icon={icons[0]} name='Build healthy cities' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <Feature icon={icons[1]} name='Protect land and water' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <Feature icon={icons[2]} name='Tree plantation' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <Feature icon={icons[3]} name='Water sustainability' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <Feature icon={icons[4]} name='Animal safety' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <Feature icon={icons[5]} name='Biodiversity' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
        </div>

      </div>
    </div>
  );
}