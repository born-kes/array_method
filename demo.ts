const icons: string[] = ['😆', '😂', '😍', '😇', '😎'];
const str: string = '😊😆😂😍😇😎';

interface expandedArray extends Array<(string | number)[]> {
  at?: (index: number) => (string | number)[];
  flat: () => (string | number)[];
  flatMap: <U>(
    callback: (
      item: string | number | [],
      index: number,
      array: (string | number | any[])[],
    ) => U | readonly U[],
    thisArg?: any,
  ) => U[];
}

type Args =
  | string
  | number
  | ((
      item: string | number,
      el: number | string,
      initialValue?: string | number,
    ) => boolean | string | number | []);
type PrintFn<T> = (method: keyof expandedArray, ...args: Args[]) => void;

export const print: PrintFn<string | number> = (method, ...args) => {
  const newArgs: Args[] = args.map((el) =>
    typeof el === 'string' ? `'${el}'` : el,
  );
  const newArray: string[] | number[] = [...icons];
  const returnEl = Array.prototype[method].call(newArray, ...args);
  console.log(
    `---
    const arry = `,
    icons,
    `;
    arry.${String(method)}(${newArgs}); => `,
    returnEl,
    `
    arry //\t `,
    newArray,
  );
  return returnEl;
};

print('fill', '❤');

console.log(
  `---
    const str = '${str}';
    const arry = `,
  icons,
  `;
---
\`\`\`
    '${str}'.split(''); => `,
  str.split(''),
  `
\`\`\`
---
    Array.from('${str}'); =>`,
  Array.from(str),
  `
    
    Array(3).fill('😍');`,
  Array(3).fill('😍'),
);

print('fill', '❤');
print('fill', '❤', 1, 3);
print('push', '❤');
print('unshift', '❤');
print('pop');
print('shift');
print('at', -2);
print('slice', -4, 3);
print('splice', 1, 2);
print('splice', 1, 2, '😆');
print('splice', 1, 2, '❤', '👍', '👌', '👋');
print('reverse');
print('sort');

console.log('===');

print('join', '❤');
print('concat', '❤', '👍', '👌', '👋');
print('includes', '😍');
print('includes', '❤');
print('indexOf', '😍');
print('map', (el, i) => `${i}:${el}`);
print('filter', (el, i) => el === '😍' || i === 4);
print('reduce', (acc, el) => acc + <string>el, '');
print('every', (el) => el === '😍');
print('every', (el) => typeof el === 'string');
print('some', (el) => el === '😍');
print('find', (el) => el === '😍');
print('findIndex', (el) => el === '😍');

console.log('===');
print('reduceRight', (acc, el) => acc + <string>el, '');

const arrayIconFlat = [
  ['😆', 1, '😆'],
  [2, '😎', '😎'],
  [5, '😆'],
] as unknown as expandedArray;
console.log(
  `---
    const arry =`,
  arrayIconFlat,
  `
    arry.flat() =>`,
  arrayIconFlat.flat(),
);

console.log(
  `
    const arry =`,
  arrayIconFlat,
  `;
    arry.flatMap((el) => el.length>2?el:[]); => `,
  arrayIconFlat.flatMap((el) => ((el as []).length > 2 ? el : [])),
);
print('reduceRight', (acc, el) => acc + (el as string), '');
print('copyWithin', 0, 4);

print('entries');
print('values');
print('keys');

console.log(`---
    for(const [index, icon] of [${icons}].entries())`);
for (const [index, icon] of [...icons].entries()) {
  console.log(`    index: ${index}, icon: ${icon}`);
}
