import styles from './ourTeamSection.module.css';
import { TeamMember } from './teamMember';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../../assets/ourTeamSection', false, /\.(webp)$/));

export function OurTeamSection() {
  return (
    <div className={styles.ourTeamSection}>
      <div className='container'>

        <div className={styles.textWrap}>
          <h2>Meet our team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>

        <div className={styles.teamWrap}>

          <TeamMember image={images[0]} name='Leonard John Davies' position='Cofounder, CEO' />
          <TeamMember image={images[1]} name='Francis Weber' position='Vice Chairman' />
          <TeamMember image={images[2]} name='Kyla Obrien' position='Head of Authority' />
          <TeamMember image={images[3]} name='Adrian Dixon' position='Support Executive' />
          <TeamMember image={images[4]} name='Freddy Busby' position='Project Manager' />
          <TeamMember image={images[5]} name='Dale Banks' position='Accountatnt, Finance' />
          <TeamMember image={images[6]} name='Miriam Middleton' position='Cofounder, CEO' />
          <TeamMember image={images[7]} name='Ellen Walton' position='Vice Chairman' />
        </div>

      </div>
    </div>
  );
}