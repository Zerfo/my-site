import styles from './styles.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-testid="footer">
      <p className={styles.footer_mail}>
        <a
          href="mailto:nikolay.smekalin@gmail.com"
          className={styles.footer_mail_link}
          data-testid="footer-mail-link"
        >
          nikolay.smekalin@gmail.com
        </a>
      </p>
      <p className={styles.footer_copyright} data-testid="footer-copyright">
        © Николай Смекалин 2021-{currentYear}
      </p>
    </footer>
  );
};
