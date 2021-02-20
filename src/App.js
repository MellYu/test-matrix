import Form from './components/form/Form';
import Matrix from './components/matrix/Matrix';
import styles from './app.module.css';
function App() {
  return (
    <div className={styles.app}>
      <h2>Hello to random Matrix Creator</h2>
      <Form/>
      <Matrix/>
    </div>
  );
}

export default App;
