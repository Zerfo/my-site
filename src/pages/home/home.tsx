import styles from './styles.module.scss';

import { Footer } from '../../components/footer';
import { SocialLinks } from '../../components/social-links';
import { Photo } from '../../components/photo';
import { Doberman } from '../../components/doberman';
import { Content } from '../../components/content';

export const HomePage = () => {
  return (
    <>
      <div className={styles.content}>
        <Photo />
        <Content />
        <SocialLinks />
      </div>
      <Doberman />
      <Footer />
    </>
  );
};
