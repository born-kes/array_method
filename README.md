[ => show code](/demo.js) <br>
[ => JavaScript demo list](https://github.com/born-kes/born-kes/tree/master/js/)
[ => TypeScript demo list](https://github.com/born-kes/born-kes/tree/master/typescript/)

---
    /* GLOBAL */
    const str = '😊😆😂😍😇😎';
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
---
```
    '😊😆😂😍😇😎'.split(''); =>  [
  '\ud83d', '\ude0a',
  '\ud83d', '\ude06',
  '\ud83d', '\ude02',
  '\ud83d', '\ude0d',
  '\ud83d', '\ude07',
  '\ud83d', '\ude0e'
]
```
---
    Array.from('😊😆😂😍😇😎'); => [ '😊', '😆', '😂', '😍', '😇', '😎' ]

    Array(3).fill('😍'); [ '😍', '😍', '😍' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.fill('❤'); =>  [ '❤', '❤', '❤', '❤', '❤' ]
    arry //       [ '❤', '❤', '❤', '❤', '❤' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.fill('❤',1,3); =>  [ '😆', '❤', '❤', '😇', '😎' ]
    arry //       [ '😆', '❤', '❤', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.push('❤'); =>  6
    arry //       [ '😆', '😂', '😍', '😇', '😎', '❤' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.unshift('❤'); =>  6
    arry //       [ '❤', '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.pop(); =>  😎
    arry //       [ '😆', '😂', '😍', '😇' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.shift(); =>  😆
    arry //       [ '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.at(-2); =>  😇
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.slice(-4,3); =>  [ '😂', '😍' ]
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.splice(1,2); =>  [ '😂', '😍' ]
    arry //       [ '😆', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.splice(1,2,'😆'); =>  [ '😂', '😍' ]
    arry //       [ '😆', '😆', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.splice(1,2,'❤','👍','👌','👋'); =>  [ '😂', '😍' ]
    arry //       [ '😆', '❤',  '👍','👌', '👋', '😇','😎']
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.reverse(); =>  [ '😎', '😇', '😍', '😂', '😆' ]
    arry //       [ '😎', '😇', '😍', '😂', '😆' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.sort(); =>  [ '😂', '😆', '😇', '😍', '😎' ]
    arry //       [ '😂', '😆', '😇', '😍', '😎' ]
===
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.join('❤'); =>  😆❤😂❤😍❤😇❤😎
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.concat('❤','👍','👌','👋'); =>  ['😆', '😂', '😍','😇', '😎', '❤','👍', '👌', '👋']
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.includes('😍'); =>  true
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.includes('❤'); =>  false
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.indexOf('😍'); =>  2
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.map((el, i) => `${i}:${el}`); =>  [ '0:😆', '1:😂', '2:😍', '3:😇', '4:😎' ]
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.filter((el, i) => (el === '😍' || i === 4)); =>  [ '😍', '😎' ]
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.reduce((acc, el) => acc + el,''); =>  😆😂😍😇😎
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.every((el) => el === '😍'); =>  false
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.every((el) => typeof el === "string"); =>  true
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.some((el) => el === '😍'); =>  true
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
===
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.find((el) => el === '😍'); =>  😍
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.findIndex((el) => el === '😍'); =>  2
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
===
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.reduceRight((acc, el) => acc + el,''); =>  😎😇😍😂😆
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry = [ [ '😆', 1, '😆' ], [ 2, '😎', '😎' ], [ 5, '😆' ] ]
    arry.flat() => [ '😆', 1, '😆',2, '😎', '😎', 5, '😆']

    const arry = [ [ '😆', 1, '😆' ], [ 2, '😎', '😎' ], [ 5, '😆' ] ] ;
    arry.flatMap((el) => el.length>2?el:[]); =>  [ '😆', 1, '😆', 2, '😎', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.reduceRight((acc, el) => acc + el,''); =>  😎😇😍😂😆
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.copyWithin(0,4); =>  [ '😎', '😂', '😍', '😇', '😎' ]
    arry //       [ '😎', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.entries(); =>  Object [Array Iterator] {}
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.values(); =>  Object [Array Iterator] {}
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    const arry =  [ '😆', '😂', '😍', '😇', '😎' ] ;
    arry.keys(); =>  Object [Array Iterator] {}
    arry //       [ '😆', '😂', '😍', '😇', '😎' ]
---
    for(const [index, icon] of [😆,😂,😍,😇,😎].entries())
    index: 0, icon: 😆
    index: 1, icon: 😂
    index: 2, icon: 😍
    index: 3, icon: 😇
    index: 4, icon: 😎
