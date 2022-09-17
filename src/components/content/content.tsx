import styles from './styles.module.scss';

export const Content = () => {
  return (
    <div data-testid="content" className={styles.content}>
      <h1 className={styles.content_title}>Привет!</h1>
      <p className={styles.content_text}>Меня зовут Николай Смекалин и я front-end разработчик.</p>
      <p className={styles.content_text}>
        В компании Домклик отвечаю за разработку интерфейсов в веб-версии кабинета участников
        сделки.
      </p>
      <p className={styles.content_text}>
        Если у вас есть вопросы или предложения, - смело пишите мне на почту
        <a href="mailto:nikolay.smekalin@gmail.com" className={styles.content_link}>
          nikolay.smekalin@gmail.com
        </a>
      </p>
      <p className={styles.content_text}>
        Больше обо мне вы можете узнать, перейдя по ссылкам ниже:
      </p>
    </div>
  );
};
