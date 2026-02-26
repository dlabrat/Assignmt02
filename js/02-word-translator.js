//The Word Translator
// Usage: Use simple conditional statements

let langCode = prompt('Please enter your language code (es/de/en/fr): ')

if (langCode === 'es') {
    console.log('Hello World translated in Spanish is: Hola mundo')
} else if (langCode === 'de') {
    console.log('Hello World translated in German is: Hallo welt')
} else if (langCode === 'en') {
    console.log('Hello World in English is: Hello World')
} else if (langCode === 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde')
} else {
    console.log('Hello World')
}
