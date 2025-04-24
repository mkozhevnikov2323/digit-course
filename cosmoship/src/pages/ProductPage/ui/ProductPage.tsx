import classNames from 'classnames';
import React from 'react';

interface ProductPageProps {
  className?: string;
}

const ProductPage = ({ className }: ProductPageProps): React.ReactNode => {
  return <div className={classNames([className])}>qwqwe</div>;
};

export default ProductPage;
