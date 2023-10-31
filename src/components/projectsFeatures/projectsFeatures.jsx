import styles from './projectsFeatures.module.css';
import { ProjectsFeaturesCard } from './projectsFeaturesCard';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../../assets/projectsFeatures', false, /\.(svg)$/));

export function ProjectsFeatures() {
  return (
    <div className={styles.projectsFeatures}>
      <div className='container'>
        <div className={styles.wrapper}>
          <ProjectsFeaturesCard image={images[0]} name='200+ Plantation in 1 week' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <ProjectsFeaturesCard image={images[1]} name='230 People Have donated' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <ProjectsFeaturesCard image={images[2]} name='30+ people joined ' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          <ProjectsFeaturesCard image={images[3]} name='$324 Raised for this initiate' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
        </div>
      </div>
    </div>
  );
}