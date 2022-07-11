import { useMemo } from 'react';
import useSWR from 'swr';
import Sandbox from '../components/Sandbox';
import Person from '../components/Person';

const fetcher = (url) => fetch(url).then((res) => res.json());

const indexHtml = '<div>Hey</div>';

const indexJs = 'console.log(`test`)';

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const test = (data) => {
    return [
      {
        id: 'demo_1',
        iframeMode: true,
        stacked: false,
        files: {
          '/index.html': {
            code: indexHtml,
            active: true,
          },
          '/src/index.js': {
            code: indexJs,
            hidden: false,
            active: false,
          },
        },
      },
    ];
  };

  const demoSchemas = test(data);

  return (
    <div>
      {data && (
        <>
          {demoSchemas.map((demo) => (
            <Sandbox key={demo.id} {...demo} packages={data} />
          ))}
        </>
      )}
    </div>
  );
}
