import styles from './page.module.css';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to the Chat App</p>
      </div>
      <div className={styles.chatContainer}>
        <Chat />
      </div>
    </main>
  );
}