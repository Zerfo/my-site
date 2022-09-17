import cn from 'classnames';

import styles from './styles.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks} data-testid="social-links">
      <a href="https://moikrug.ru/nikolaysmekalin" target="_blank">
        <div
          className={cn(styles.socialLinks_icon, styles.socialLinks_cv)}
          data-testid="social-link"
        />
      </a>
      <a href="https://github.com/Zerfo" target="_blank">
        <div
          className={cn(styles.socialLinks_icon, styles.socialLinks_git)}
          data-testid="social-link"
        />
      </a>
      <a href="https://t.me/zerfo" target="_blank">
        <div
          className={cn(styles.socialLinks_icon, styles.socialLinks_tg)}
          data-testid="social-link"
        />
      </a>
      <a href="https://vk.com/nik.smekalin" target="_blank">
        <div
          className={cn(styles.socialLinks_icon, styles.socialLinks_vk)}
          data-testid="social-link"
        />
      </a>
      <a href="https://www.instagram.com/nik.smekalin" target="_blank">
        <div
          className={cn(styles.socialLinks_icon, styles.socialLinks_inst)}
          data-testid="social-link"
        />
      </a>
    </div>
  );
};
