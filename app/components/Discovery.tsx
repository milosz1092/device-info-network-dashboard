import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

type Props = {
  discoverDevices: () => void;
};

export default function Counter(props: Props) {
  useEffect(() => {
    const {
      discoverDevices
    } = props;  

    console.log('mounted or updated');
    discoverDevices();
  });

  return (
    <div>
      <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      Discovery
    </div>
  );
}
