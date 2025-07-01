import Link from 'next/link';
import { items, refs } from '@/data/random';

export default function Random() {
  return (
    <div>
      <h1>I want to...</h1>
      <div className="mt-10 space-y-3">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.title} </span>
              {item.refs.length > 0 && (
                <span>
                  {'[ '}
                  {item.refs?.map((refKey, index) => {
                    const ref = refs[refKey];
                    const isLast = index === item.refs.length - 1;
                    return (
                      <span key={refKey}>
                        <Link
                          href={ref.url}
                          target="_blank"
                          className="underline">
                          {ref.text}
                        </Link>
                        {!isLast && ' | '}
                      </span>
                    );
                  })}
                  {' ]'}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
