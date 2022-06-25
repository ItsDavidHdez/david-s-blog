import styles from "../styles/Newsletter.module.scss";

const Newsletter = () => {
  const handleSubmit = () => {
    window.open(
      "https://tinyletter.com/ItsDavidHdez",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
    return true;
  };

  return (
    <div>
      <h4 className={styles.h4}>¡Suscríbete al newsletter!</h4>
      <form
        className={styles.form}
        style={{ border: "1px", padding: "3px", textAlign: "center" }}
        action="https://tinyletter.com/ItsDavidHdez"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
      >
        <p className={styles.p}>
          <label className={styles.label} htmlFor="tlemail">
            Introduce tu email
          </label>
        </p>
        <input className={styles.input} type="text" name="email" id="tlemail" />
        <input className={styles.input} type="hidden" value="1" name="embed" />
        <button className={styles.btn} type="submit" value="Subscribe">
          Suscribirse
        </button>
        <p className={styles.p}>Sin envio de SPAM😉</p>
      </form>
    </div>
  );
};

export default Newsletter;
