import classNames from 'classnames';
import React from 'react';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps): React.ReactNode => {
  return <div className={classNames([className])}>qwqwe</div>;
};

export default MainPage;
