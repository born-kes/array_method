const icons = ['😆', '😂', '😍', '😇', '😎'];
const str = '😊😆😂😍😇😎';
const print = (method, ...args) => {
    const newArgs = args.map((el) => (typeof el === "string") ? `'${el}'` : el)
    const newArray = [...icons];
    const returnEl = newArray[method](...args)
    console.log(`---
    const arry = `, icons, `;
    arry.${method}(${newArgs}); => `, returnEl, `
    arry //\t `, newArray);
};

console.log(`---
    /* GLOBAL */
    const str = '${str}';
    const arry = `, icons, `;
---
\`\`\`
    '${str}'.split(''); => `, str.split(''), //.split [  '\ud83d', '\ude0a', '\ud83d', '\ude06', '\ud83d', '\ude02', '\ud83d', '\ude0d', '\ud83d', '\ude07', '\ud83d', '\ude0e' ]
    `
\`\`\`
---
    Array.from('${str}'); =>`, Array.from(str), `
    
    Array(3).fill('😍');`, Array(3).fill('😍'));	//  [ '😍', '😍', '😍' ]

print('fill', '❤');			// [ '❤', '❤', '❤', '❤', '❤' ] => [ '❤', '❤', '❤', '❤', '❤' ]
print('fill', '❤', 1, 3);		// [ '😆', '❤', '❤', '😇', '😎' ] => [ '😆', '❤', '❤', '😇', '😎' ]
print('push', '❤');		//  [ '😆', '😂', '😍', '😇', '😎', '❤' ] => 6
print('unshift', '❤');		//  [ '❤', '😆', '😂', '😍', '😇', '😎' ] => 6
print('pop');		//  [ '😆', '😂', '😍', '😇' ] =>  😎
print('shift');		//  [ '😂', '😍', '😇', '😎' ] => '😆'
print('at', -2);		// [ '😆', '😂', '😍', '😇', '😎' ] =>  😇
print('slice', -4, 3); // [ '😆', '😂', '😍', '😇', '😎' ] =>  [ '😂', '😍' ]
print('splice', 1, 2); // [ '😆', '😇', '😎' ] => ['😂', '😍' ]
print('splice', 1, 2, '😆');  //  [ '😆', '😆', '😇', '😎' ] =>  [ '😂', '😍' ]
print('splice', 1, 2, '❤', '👍', '👌', '👋');  //  ['😆', '❤',  '👍', '👌', '👋', '😇', '😎'] => [ '😂', '😍' ]
print('reverse'); //  [ '😎', '😇', '😍', '😂', '😆' ] =>  [ '😎', '😇', '😍', '😂', '😆' ]
print('sort');  // [ '😂', '😆', '😇', '😍', '😎' ] => [ '😂', '😆', '😇', '😍', '😎' ]

console.log('===');

print('join', '❤'); //  =>  😆❤😂❤😍❤😇❤😎
print('concat', '❤', '👍', '👌', '👋'); // => ['😆', '😂', '😍','😇', '😎', '❤','👍', '👌', '👋']
print('includes', '😍'); // => true
print('includes', '❤'); // => true
print('indexOf', '😍'); // => 2
print('map', (el, i) => `${i}:${el}`); // =>  [ '0:😆', '1:😂', '2:😍', '3:😇', '4:😎' ]
print('filter', (el, i) => (el === '😍' || i === 4)); // =>  [ '0:😆', '1:😂', '2:😍', '3:😇', '4:😎' ]
print('reduce', (acc, el) => acc + el, ''); // =>  [ '0:😆', '1:😂', '2:😍', '3:😇', '4:😎' ]
print('every', (el) => el === '😍'); // =>  false
print('every', (el) => typeof el === "string"); // =>  true
print('some', (el) => el === '😍'); // =>  true

console.log('===');

print('find', (el) => el === '😍'); // => 😍
print('findIndex', (el) => el === '😍'); // => 2

console.log("==="); //new line
print('reduceRight', (acc, el) => acc + el, '');

const arrayIconFlat = [['😆', 1, '😆'], [2, '😎', '😎'], [5, '😆']];
console.log(`---
    const arry =`, arrayIconFlat, `
    arry.flat() =>`, arrayIconFlat.flat()
); // [ [ '😆', 1, '😆' ], [ 2, '😎', '😎' ], [ 5, '😆' ] ] .flat()  => ['😆', 1, '😆', 2, '😎', '😎', 5, '😆' ]

console.log(`
    const arry =`, arrayIconFlat, `;
    arry.flatMap((el) => el.length>2?el:[]); => `, arrayIconFlat.flatMap((el) => el.length > 2 ? el : []));
print('reduceRight', (acc, el) => acc + el, '');
print('copyWithin', 0, 4); // [ '😍', '😆', '😂', '😍', '😇', '😎' ] => [ '😍', '😆', '😂', '😍', '😇', '😎' ]

print('entries');
print('values');
print('keys');

console.log(`---
    for(const [index, icon] of [${icons}].entries())`)
for (const [index, icon] of [...icons].entries()) {
    console.log(`    index: ${index}, icon: ${icon}`);
}
//*/