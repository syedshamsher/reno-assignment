import { Button, ButtonProps } from 'antd';
import { FC } from 'react';
import styles from '../index.module.scss';

type Props = {
  previousButton?: ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>;
  nextButton?: ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>;
};

const Footer: FC<Props> = (props) => {
  const { previousButton, nextButton } = props;
  return (
    <div className={styles.buttonContainer}>
      {previousButton && (
        <Button {...previousButton} className={styles.prevButton}>
          {previousButton?.title}
        </Button>
      )}
      {nextButton && (
        <Button className={styles.nextButton} {...nextButton}>
          {nextButton?.title}
        </Button>
      )}
    </div>
  );
};

export { Footer };
