import 'src/styles/Test.css';
import { Header } from 'src/imports/Views';

// const run = () => {
//     const str = "".split('');
//     var newstr = [];
//     var str2 = "";

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == "'") {
//             continue;
//         } else if (str[i] == ",") {
//             newstr.push(";\n")
//         } else if (str[i] == str[i].toUpperCase()) {
//             newstr.push(str[i].toLowerCase())
//         } else {
//             newstr.push(str[i])
//         }

//         if (i + 1 == str.length) {
//             newstr.push(';')
//         }
//     }
//     for (var i = 0; i < newstr.length; i++) {
//         str2 = str2 + newstr[i]
//     }
//     console.log(str2)
// }

const Test = () => {
    return (
        <>
            <section className='main_body__div'>
                <Header />
            </section>
        </>
    )
};

export default Test;