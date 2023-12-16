import styles from "../styles/TakeawayInfo.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TakeawayInfo = ({ orderComplete, setOrderComplete }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      setOrderComplete(true);
      console.log("Success:", event.target.elements);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article>
      <div>
        {success ? (
          <div className={styles.bookingsContainer}>
            <div className={styles.successMessageContainer}>
              <p className={styles.successMessage}>
                Thank you for your order!
                <br />
                Your food will be ready in 20 minutes.
              </p>
              <img src="/assets/check.svg" alt="Checkmark" className={styles.check} />
              <Link className={styles.backToMenu} href="/">
                Go back to menu
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} autoComplete="off" className={styles.formContainer}>
              <div className={styles.leftColumn}>
                <div>
                  <label
                    style={{
                      position: "absolute",
                      transform: "translateX(15px)",
                      backgroundColor: "#fff",
                      lineHeight: "0px",
                      paddingLeft: "10px",
                      paddingRight: "8px",
                    }}
                    htmlFor="first-name"
                  >
                    First name <span className={styles.star}>*</span>
                  </label>
                  <input type="text" id="first-name" required />
                </div>

                <div>
                  <label
                    style={{
                      position: "absolute",
                      transform: "translateX(15px)",
                      backgroundColor: "#fff",
                      lineHeight: "0px",
                      paddingLeft: "10px",
                      paddingRight: "8px",
                    }}
                    htmlFor="last-name"
                  >
                    Last name <span className={styles.star}>*</span>
                  </label>
                  <input type="text" id="last-name" required />
                </div>

                <div>
                  <label
                    style={{
                      position: "absolute",
                      transform: "translateX(15px)",
                      backgroundColor: "#fff",
                      lineHeight: "1px",
                      paddingLeft: "10px",
                      paddingRight: "8px",
                    }}
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input type="email" id="email" />
                </div>

                <div>
                  <label
                    style={{
                      position: "absolute",
                      transform: "translateX(15px)",
                      backgroundColor: "#fff",
                      lineHeight: "0px",
                      paddingLeft: "10px",
                      paddingRight: "8px",
                    }}
                    htmlFor="phone-number"
                  >
                    Phone number <span className={styles.star}>*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    placeholder="+45 00 00 00 00"
                    required
                  />
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div>
                  <label
                    style={{
                      position: "absolute",
                      transform: "translateX(15px)",
                      backgroundColor: "#fff",
                      lineHeight: "1px",
                      paddingLeft: "10px",
                      paddingRight: "8px",
                    }}
                    htmlFor="comment"
                  >
                    Comment
                  </label>
                  <textarea id="comment" rows="4" />
                </div>

                <div className={styles.buttoncontainer}>
                  <button className={styles.button} type="submit">
                    Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </article>
  );
};

export default TakeawayInfo;
