import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiCall = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!path) {
          return;
        }

        const response = await axios.get(path, {
          baseURL: 'http://localhost:1337/api',
          headers: {
            Authorization: 'Bearer 48ac0f5398346836f41e92bcb58d1f4dafa68c26528fd735a11263f913d955b74d45d7ebcb41bd5b917a72abc3baed30ceaae4f9d2bc9f58ca86a5112e34c954e88a23232aaedb28caed1f3e9eaddac2294e1b7c52afad69aff164550c6d58f0280598d835f3fdf8a6a1a15366ed3b297e6962fd0444dc6f4366d6d7b921b500',
          },
        });
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [path]);

  return { data };
};

export default useApiCall;



