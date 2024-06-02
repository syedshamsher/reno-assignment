import { FC } from 'react';
import styles from './index.module.scss';
type Props = {
  image: string;
};

const Summary: FC<Props> = (props) => {
  const { image } = props;
  return (
    <div className={styles.summary}>
      <div className={styles.action}></div>
      <div className={styles.description}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export { Summary };
