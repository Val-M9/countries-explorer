import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { BackBtn } from '../../components';

const Details = () => {
  const [info, setInfo] = useState<Record<string, any>>();
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      if (name) {
        const result = await callApi.searchByName(name);
        console.log(result);
        setInfo(result);
      }
    })();
  }, [name]);
  console.log(name);

  return (
    <div>
      <BackBtn />
      <img alt="flag" />
      <div>
        <div>
          <h2></h2>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
        <div>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export { Details };
