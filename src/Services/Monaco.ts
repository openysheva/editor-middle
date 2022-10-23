import * as monaco from 'monaco-editor';


import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const defaultModelValue = `import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

/* Задача № 1 */

/* 
    Главное перед рабочим днем - это хорошо выспаться.
    Есть массив со временем, по которому ежедневно звонит будильник.
    Нужно найти максимальный интервал между звонками.
    Каждый будильник начинает звонить в начале соответствующей минуты и звенит ровно одну минуту.
    Время в массиве не в хронологическом порядке.
    Игнорируйте повторяющиеся элементы, если таковые имеются.

    Пример:
    ringingBells(["14:51"]) // вернет "23:59"
    ringingBells(["23:00","04:22","18:05","06:24"]) // вернет "11:40"
*/

const ringingBells = periods => {
    // ваш код...
}  

/*
    Выдался перерыв и нечем заняться? Отлично, собери пирамиду из единиц!
    На вход ты получаешь количество уровней пирамиды, в ответе необходимо отдать массив (пирамида) с массивами (уровнями).

    Пример:
    pyramid(2); // вернет [[1], [1, 1]]
*/

const pyramid = levels => {
    // ваш код...
}

/* Задача № 3 */

/*
    Из данного количества символов нужно проверить, есть ли в нем те буквы, из которых можно собрать нужное слово.


    Пример:
    scramble('rkqodlw', 'world'); // вернет true
*/

const scramble = (letters, word) => {
    // ваш код...
}

/* Задача № 4 */

/*
    Из данного списка чисел нужно найти самое большое и самое маленькое число.

    Пример:
    highAndLow("1 2 3 4 5"); // вернет "5 1"
*/

const highAndLow = numberString => {
    // ваш код...
}

/* Задача № 5 */

/*
    В бухгалтерии снова список затрат, но перед работой, нужно проверить, отсортированы ли они.
    Ответ по сортировке нужно вернуть в одном из возможных вариантов:
        - "yes, ascending" - если отсортированы по возрастанию
        - "yes, descending" - если отсортированы по убыванию
        - "no" - в любом другом случае

    Пример:
    checkOrder([15, 7, 3, 1]); // вернет "yes, descending"
*/

const checkOrder = income => {
    // ваш код...
}

/* Задача № 6 */

/*
    Дорогие слова!
    Стоимость каждой буквы зависит от ее положения в алфавите (вес - это номер буквы в алфавите).
    Нужно найти в предложении самое дорогое слово.
    Вес не чувствителен к регистру.

    Примеры:
    wordWithMaxCost("man i need a taxi up to ubud"); // вернет "taxi"
*/

const wordWithMaxCost = sentence => {
    // ваш код...
}

/* Задача № 7 */

/*
    Все бумаги должны быть по алфавиту!
    Среди данных букв найдите пропущенную букву из алфавита.
    Не забывайте про регистр, в исходных данных могут быть и строчные и прописные буквы.

    Пример:
    findMissingLetter(["a","b","c","d","f"]) // вернет "е"
*/

const findMissingLetter = letterArray => {
    // ваш код...
}

/* Задача № 8 */

/*
    Составь словарь, где ключ - буква алфавита,
    а значение - это количество повторов буквы в строке, которую мы получаем на вход.

    Пример:
    letterDictionary("aba"); // вернет { a: 2, b: 1 }
*/

const letterDictionary = incomeString => {
    // ваш код...
}

/* Задача № 9 */

/*
    1 или 0? Найди все возможные варианты!
    На вход мы получаем строку которая состоит из "0", "1" и знаков "?".
    На месте каждого знака вопроса может находиться либо "0", либо "1".
    Верните из функции массив всех возмонжых вариантов итоговой строки, после замены "?".

    Пример:
    possibilities("101?"); // вернет ["1010", "1011"]
*/

const possibilities = replacingString => {
    // ваш код...
}

/* Задача № 10 */

/*
    Банку нужно больше денег!
    Дано число, нужно переставить его цифры так, чтобы получить наибольшее.

    Пример:
    nextBigger(12); // вернет 21
*/

const nextBigger = incomeNumber => {
    // ваш код...
}

/* Задача № 11 */

/*
    Дана строка. Найди первую не повторяющуюся в ней букву.

    Пример:
    firstNonRepeatingLetter("stress"); // вернет "t"
*/

const firstNonRepeatingLetter = countingLettersString => {
    // ваш код...
}

/* Задача № 12 */

/*
    Мы в банке стараемся всегда улыбаться!

    Правила улыбающегося лица:
    - Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как : или ;
    - У смайлика может быть нос, но не обязательно. Допустимые символы для носа - или ~
    - Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен знаком ) или D.
    
    Не допускается использование дополнительных символов, кроме упомянутых.

    Допустимые примеры смайлов: :) :D ;-D :~)
    Недопустимые смайлики: ;( :> :} :]

    Найди количество улыбок во входящем массиве.

    Пример:
    countSmileys([":)", ";(", ";}", ":-D"]); // вернет 2
*/

const countSmileys = smileysArray => {
    // ваш код...
}

/* Задача № 13 */

/*
    Дана строка, если она заканчивается на число - прибавь к нему +1.
    Если заканчивается буквой - добавь единицу.

    Пример:
    incrementString("foobar23"); // вернет "foobar24"
    incrementString("foo"); // вернет "foobar1"
*/

const incrementString = stringForIncrement => {
    // ваш код...
}

/* Задача № 14 */

/*
    Дан массив массивов. 
    Если его отсортировать по длине - мы получим последовательность, где каждый массив имеет длину n + 1.
    Но массив с одной длиной отсутствует.
    Верните из функции его длину.

    Пример:
    lostArray(
        [
            [1, 2, 4, "s", "hello"]
            ["f", "discount"],
            ["tier", 3, "my", 10],
        ]
    ) // вернет 3
*/

const lostArray = arrayList => {
    // ваш код...
}

/* Задача № 15 */

/*
    Квартальные цели.
    Менеджеры стали часто ошибаться с номерами кварталов при планировании.
    Помогите им, написав функцию, которая по номеру месяца вернет квартал.

    Пример:
    quarterOf(7); // "Q3"
*/

const quarterOf = month => {
    // ваш код...
}

/* Не изменяйте эту часть кода для корректной работы */

export const GlobalStyle = createGlobalStyle\`
    html, body, #app {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
\`;

const Button = styled.button\`
    width: 120px;
    height: 40px;
    cursor: pointer;
    color: #2B2D33;
    background-color: #FEE600;
    border: 0;
    border-radius: 8px;
\`;

const Container = styled.div\`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
\`;

const Logo = styled.img\`
    width: 200px;
    height: 100px;
\`;

const App = () => {
    return (
        <HashRouter>
            <GlobalStyle />
            <Container id="right-container">
                <Logo src="https://www.raiffeisen.ru/common/new/images/logo-raif.svg" />
            </Container >
        </HashRouter>
    );
}

window['exercise'] = {
    task1: ringingBells,
    task2: pyramid,
    task3: scramble,
    task4: highAndLow,
    task5: checkOrder,
    task6: wordWithMaxCost,
    task7: findMissingLetter,
    task8: letterDictionary,
    task9: possibilities,
    task10: nextBigger,
    task11: firstNonRepeatingLetter,
    task12: countSmileys,
    task13: incrementString,
    task14: lostArray,
    task15: quarterOf,
};

ReactDOM.render(<App />, document.getElementById('app'));`

export const Monaco = new class {

    editor?: monaco.editor.IStandaloneCodeEditor;
    model?: monaco.editor.ITextModel;

    constructor() {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        });

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
        });

        ['react', 'react-dom', 'styled-components', 'history', 'react-router', 'react-router-dom'].forEach(this.loaStaticdDTS);
    }

    loaStaticdDTS = async (libName: string) => {
        const response = await fetch(`/${libName}.d.ts`)
        const dts = await response.text();
        monaco.editor.createModel(dts, 'typescript', monaco.Uri.parse(`file:///node_modules/@types/${libName}/index.d.ts`));
        monaco.languages.typescript.typescriptDefaults.addExtraLib(dts, `file:///node_modules/@types/${libName}/index.d.ts`);
    }

    createEditor = (ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor | null => {
        if (ref) {
            this.createModel();
            this.editor = monaco.editor.create(ref, {
                theme: "vs-dark",
                automaticLayout: true,
                model: this.model
            }) as monaco.editor.IStandaloneCodeEditor;
            return this.editor;
        }
        return null;
    }

    createModel = () => {
        this.model = this.model ?? monaco.editor.createModel(defaultModelValue, 'typescript', monaco.Uri.parse(`file:///index.tsx`));
        monaco.editor.setModelLanguage(this.model, 'typescript');
    }

    updateModel = (data: string) => {
        this.model?.setValue(data ?? '');
    }

}
