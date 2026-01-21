export function checkheading(str) {
        return /(\*)(\*)(.*)\*$/.test(str);
    }

    export function replaceheading(str) {
        return str.replace(/^(\*)(\*)|(\*)/g,'')
    }