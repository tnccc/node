import { plus, minus } from './dist/module.js';

// ファイルの書き込み
// const fs = require('fs');
// const path = require('path');


// const distPath = path.resolve(__dirname, './dist/test.txt');

// console.log(__dirname); // ディクレトリ 
// console.log(__filename); // ファイルを実行しているパス
// console.log(distPath);


// path操作が格納されているモジュール

// nodeコマンドを実行したディレクトリからの相対パス
// fs.writeFileSync(distPath, 'Hello, Node.js!!!')

// console.log('Hello Node.js')
console.log(plus(1, 3));
console.log(minus(1, 3));
