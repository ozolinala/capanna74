import styles from "../styles/Booking.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
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
          <div className={styles.successMessageContainer}>
            <p className={styles.successMessage}>
              You have successfully made a reservation!
            </p>
            <img
              src="/assets/check.svg"
              alt="Checkmark"
              className={styles.check}
            />
            <Link className={styles.backToMenu} href="/">
              Go back to menu
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={styles.formContainer}
          >
            <div className={styles.leftColumn}>
              <div>
                <label htmlFor="first-name">First name:</label>
                <input type="text" id="first-name" required />
              </div>

              <div>
                <label htmlFor="last-name">Last name:</label>
                <input type="text" id="last-name" required />
              </div>

              <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" required />
              </div>

              <div>
                <label htmlFor="phone-number">Phone number:</label>
                <div>
                  <input
                    type="text"
                    id="phone-prefix"
                    className={styles.phonePrefix}
                    defaultValue="+45"
                  />
                  <input
                    type="text"
                    id="phone-number"
                    defaultValue="00 00 00 00"
                  />
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" rows="4" />
              </div>

              <div>
                <label htmlFor="date">Select a date:</label>
                <input
                  type="date"
                  id="date"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="time">Select a time:</label>
                <input type="time" id="time" />
              </div>

              <div>
                <button
                  className={styles.button}
                  type="submit"
                  disabled={loading}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </article>
  );
};

export default BookingForm;
