console.log("Hello World!");

///// What is React and why we should use it?

/*
✅ What is React?
React ek JavaScript library hai jo user interfaces (UI) banane ke liye use hoti hai — specially single-page applications (SPAs) ke liye.

💡 Official definition:
"React is a JavaScript library for building user interfaces."

React ko Facebook ne banaya tha (2013 me) aur aaj ke time me ye front-end development ka king ban chuka hai.


✅ React kyun banaya gaya?
Pehle ke web apps ka structure kuch aisa hota tha:

Har baar user kuch karta (jaise form submit ya button click), toh poori page reload hoti thi.

Ye bahut slow aur irritating experience deta tha.

React aaya aur bola:
👉 “Sirf wahi part update karo jo change hua hai — poori page reload mat karo.”

Iska magic hota hai: Component-based architecture + Virtual DOM
*/

//------------------------------------

//// Virtual Dom and Reconciliation Process

/*
✅ What is the Virtual DOM?
DOM (Document Object Model) ek tree structure hota hai jo browser use karta hai HTML elements ko represent karne ke liye.

Virtual DOM ek lightweight JavaScript object hota hai — jo real DOM ka ek in-memory copy hota hai.

💡 React Virtual DOM ka use karta hai taaki real DOM me minimum changes kare aur performance fast rahe.

✅ Analogy: Virtual DOM in Real Life
Socho tum ek editor ho, aur tumhare paas ek original book hai.
Jab koi nayi version banana hoti hai, toh tum pehle rough copy (Virtual DOM) me sab changes likhte ho.
Fir sirf badli hui lines ko final book me update karte ho.

Aise hi React karta hai — sabse pehle Virtual DOM me changes apply karta hai, fir compare karta hai old vs new, aur sirf badli hui cheezein real DOM me update karta hai.

✅ What is Reconciliation?
Reconciliation ek process hai jisme React compare karta hai:

🔸 Old Virtual DOM

🔸 New Virtual DOM

Phir decide karta hai ki:

Kya change hua?

Kahan update karna hai?

Kya re-render karna hai?

Is process ko fast banane ke liye React efficient diffing algorithm use karta hai.


*/

// Note : Actual DOM ki ek copy hoti hai jise virtual DOM kahte hai. Jab ham kuchh bhi change karte hai to ek new virtual DOM create hota hai aur fir react diffing algorithm use karta hai changes check karne ke liye jise ham reconsilation bhi kahte hai aur fir react actual DOM ko update karta hai efficiently jisse user experience aur bad jaata hai.

// Note : Virtual DOM aur new Virtual DOM hamari memory mai create hota hai aur jaise hi inka purpose khatam ho jaata hai ye memory se delete bhi ho jaate hai.

//----------------------------------

///// babel/transpiler vs compiler

/*
✅ What is Babel?
Babel ek JavaScript "transpiler" hai jo modern JavaScript (ES6/ES7/ESNext) code ko older JavaScript (ES5) me convert karta hai — taaki wo older browsers me bhi kaam kare.

🔹 Ye ek development-time tool hai — browser me directly nahi chalta.
🔹 React me jo JSX likhte ho (<h1>Hello</h1>), Babel usko JavaScript me convert karta hai.

✅ What is a Transpiler?
Transpiler ka matlab hai:
Source-to-source compiler — jo ek language (ya version) ke code ko same language ke ek aur version me convert karta hai.

*/
{
  const sum = (a, b) => a + b;
}

// ➡️ Babel transpile karega:

// ES5 Code
var sum = function (a, b) {
  return a + b;
};

// 📌 Dono JavaScript hi hain — bas version alag hai. Isi liye ise Transpiler kehte hain.

/////----------------------------------

/*
✅ What is a Compiler?
Compiler ek aisa tool hota hai jo code ko ek language se doosri language me convert karta hai-- Jaise:

c/c++                      Machine Code(Binary)
TypeScript                 JavaScript
Java                       Bytecode(.class)

➡️ Compiler low-level code banata hai jise CPU samajh sake ya kisi runtime me chale.
*/

/////  npm vs npx vs nvm, ~ and ^, package.json and package-lock.json

/*
🧠 1. npm – Node Package Manager
✅ What it is:
npm ek CLI tool hai jo JavaScript libraries install, update, aur manage karne ke kaam aata hai.

Ye Node.js ke sath automatically install hota hai.

🔧 Use Case:
Jab tum npm install react likhte ho, npm React library ko internet se download karta hai aur project ke andar node_modules/ folder me store karta hai.

🔥 Common Commands:
Command	Explanation
npm init	           : Naya package.json file banata hai
npm install ya npm i   : Sab dependencies install karta hai
npm update	           : Sab packages ko update karta hai


🧠 2. npx – Node Package Execute
✅ What it is:
npx ka kaam hai: run karna ek npm package bina usko globally install kiye.

🤔 Why Use npx?
Benefit	                     Explanation
✅ No global clutter	        System bhari nahi hota unnecessary packages se
✅ Always latest version     Har run pe fresh version use hota hai

🧠 3. nvm – Node Version Manager
✅ What it is:
nvm ek tool hai jo tumhare system me multiple Node.js versions ko install aur switch karne deta hai.

🧠 4. ~ vs ^ – Version Specifiers in package.json

✅ Symbol ^ (Caret):

"react": "^18.2.0"

Ye allow karta hai minor and patch version updates.

Eg: ^18.2.0 means: Install any version from 18.2.0 to <19.0.0.

✅ Useful when:

Tum latest bug fixes chahte ho, but breaking changes nahi.

✅ Symbol ~ (Tilde):

"react": "~18.2.0"

Ye allow karta hai only patch updates.

Eg: ~18.2.0 means: Install anything from 18.2.0 to <18.3.0.

✅ Useful when:

Tum exact version behavior maintain karna chahte ho.


🧠 5. package.json – Project Manifest File

✅ What it is:
Ye ek configuration file hai jo tumhare project ki identity, scripts, aur dependencies batata hai.

{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}

| Key               | Description                 |
| ----------------- | --------------------------- |
| `name`, `version` | App ka naam aur version     |
| `scripts`         | Custom terminal commands    |
| `dependencies`    | Required libraries          |
| `devDependencies` | Sirf development time tools |

🧠 6. package-lock.json – Exact Dependency Tracker

✅ What it is:
Ye file batata hai exact version kis package ka install hua hai — taaki tumhara aur dusre developers ka project same tarah behave kare.

💼 Use Case:
Tumhare package.json me hai:
"axios": "^1.5.0"

Lekin package-lock.json me likha hai:
"axios": "1.5.2"

Ab agar koi developer npm install karega, to exactly 1.5.2 install hoga, na ki 1.5.3 ya 1.6.0

✅ Ye consistency aur stability ke liye important hai.

*/
