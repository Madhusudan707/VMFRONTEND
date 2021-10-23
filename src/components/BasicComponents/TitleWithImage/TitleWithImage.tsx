import React from 'react';

import styles from './TitleWithImage.module.scss';

interface Props {
  title: string;
  image?: string;
  icon?: string;
  highlightWords?: string;
  children?: React.ReactNode;
  isHeader?: boolean;
}

const TitleWithImage: React.FC<Props> = (props: Props) => {
  const {
    title = '',
    image = null,
    icon = null,
    highlightWords = null,
    children = null,
    isHeader = false,
  } = props;

  const getComponentOnTheRight = () => {
    if (icon) {
      if (isHeader) {
        return (
          <div className={styles.iconBgStyle}>
            <div className={styles.smallIconStyle}>{icon}</div>
          </div>
        );
      }

      return <div className={styles.iconStyle}>{icon}</div>;
    }
    if (image) {
      return (
        <img
          className={styles.imageStyle}
          src={`${process.env.REACT_APP_CDN_ENDPOINT}/${image}`}
          alt="gw-logo"
          role="presentation"
        />
      );
    }

    return null;
  };
  const getTitle = () => {
    if (
      highlightWords &&
      highlightWords.length &&
      title.indexOf(highlightWords) > -1
    ) {
      return (
        <div className={styles.textStyle}>
          <span>
            {title.substr(0, title.indexOf(highlightWords))}
            <span className={styles.subtext}>{highlightWords}</span>
            {title.substr(
              title.indexOf(highlightWords) + highlightWords.length,
            )}
          </span>
        </div>
      );
    }

    return <div className={styles.textStyle}>{title}</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.rowStyle}>
        {getTitle()}
        {getComponentOnTheRight()}
      </div>

      {children}
    </div>
  );
};

export default TitleWithImage;
