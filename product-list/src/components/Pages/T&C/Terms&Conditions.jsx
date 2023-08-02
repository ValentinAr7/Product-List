import styles from './terms&conditions.module.css';
const Terms = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms & Conditions</h1>
      <p>
        Welcome to our website. If you continue to browse and use this website,
        you are agreeing to comply with and be bound by the following terms and
        conditions of use, which together with our privacy policy govern our
        website's relationship with you in relation to this website.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
};

export default Terms;
