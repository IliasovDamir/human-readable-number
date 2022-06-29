module.exports = function toReadable(number) {

    switch (number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }

    const num = number.toString();
    const revnum = num.split('').reverse().join('');

    console.log(num);
    console.log(revnum);

    let result = '';


    if (revnum[1] === '0' && revnum[0] === '0') {
        result = result;
    } else if (revnum[1] === '0' && revnum[0] === '1') {
        result = 'one';
    } else if (revnum[1] === '0' && revnum[0] === '2') {
        result = 'two';
    } else if (revnum[1] === '0' && revnum[0] === '3') {
        result = 'three';
    } else if (revnum[1] === '0' && revnum[0] === '4') {
        result = 'four';
    } else if (revnum[1] === '0' && revnum[0] === '5') {
        result = 'five';
    } else if (revnum[1] === '0' && revnum[0] === '6') {
        result = 'six';
    } else if (revnum[1] === '0' && revnum[0] === '7') {
        result = 'seven';
    } else if (revnum[1] === '0' && revnum[0] === '8') {
        result = 'eight';
    } else if (revnum[1] === '0' && revnum[0] === '9') {
        result = 'nine';
    } else if (revnum[1] === '1' && revnum[0] === '0') {
        result = 'ten';
    } else if (revnum[1] === '1' && revnum[0] === '1') {
        result = 'eleven';
    } else if (revnum[1] === '1' && revnum[0] === '2') {
        result = 'twelve';
    } else if (revnum[1] === '1' && revnum[0] === '3') {
        result = 'thirteen';
    } else if (revnum[1] === '1' && revnum[0] === '4') {
        result = 'fourteen';
    } else if (revnum[1] === '1' && revnum[0] === '5') {
        result = 'fifteen';
    } else if (revnum[1] === '1' && revnum[0] === '6') {
        result = 'sixteen';
    } else if (revnum[1] === '1' && revnum[0] === '7') {
        result = 'seventeen';
    } else if (revnum[1] === '1' && revnum[0] === '8') {
        result = 'eighteen';
    } else if (revnum[1] === '1' && revnum[0] === '9') {
        result = 'nineteen';
    } else if (revnum[1] === '2') {
        result = 'twenty';
    } else if (revnum[1] === '3') {
        result = 'thirty';
    } else if (revnum[1] === '4') {
        result = 'forty';
    } else if (revnum[1] === '5') {
        result = 'fifty';
    } else if (revnum[1] === '6') {
        result = 'sixty';
    } else if (revnum[1] === '7') {
        result = 'seventy';
    } else if (revnum[1] === '8') {
        result = 'eighty';
    } else if (revnum[1] === '9') {
        result = 'ninety';
    }

    if (revnum[0] === '0') {
        result = result;
    } else if (revnum[0] === '1' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' one';
    } else if (revnum[0] === '2' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' two';
    } else if (revnum[0] === '3' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' three';
    } else if (revnum[0] === '4' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' four';
    } else if (revnum[0] === '5' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' five';
    } else if (revnum[0] === '6' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' six';
    } else if (revnum[0] === '7' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' seven';
    } else if (revnum[0] === '8' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' eight';
    } else if (revnum[0] === '9' && revnum[1] !== '1' && revnum[1] !== '0') {
        result = result + ' nine';
    }

    if (revnum[2] === '1' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'one hundred';
    } else if (revnum[2] === '1') {
        result = 'one hundred' + ' ' + result;
    } else if (revnum[2] === '2' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'two hundred';
    } else if (revnum[2] === '2') {
        result = 'two hundred' + ' ' + result;
    } else if (revnum[2] === '3' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'three hundred';
    } else if (revnum[2] === '3') {
        result = 'three hundred' + ' ' + result;
    } else if (revnum[2] === '4' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'four hundred';
    } else if (revnum[2] === '4') {
        result = 'four hundred' + ' ' + result;
    } else if (revnum[2] === '5' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'five hundred';
    } else if (revnum[2] === '5') {
        result = 'five hundred' + ' ' + result;
    } else if (revnum[2] === '6' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'six hundred';
    } else if (revnum[2] === '6') {
        result = 'six hundred' + ' ' + result;
    } else if (revnum[2] === '7' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'seven hundred';
    } else if (revnum[2] === '7') {
        result = 'seven hundred' + ' ' + result;
    } else if (revnum[2] === '8' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'eight hundred';
    } else if (revnum[2] === '8') {
        result = 'eight hundred' + ' ' + result;
    } else if (revnum[2] === '9' && revnum[1] === '0' && revnum[0] === '0') {
        result = 'nine hundred';
    } else if (revnum[2] === '9') {
        result = 'nine hundred' + ' ' + result;
    }
    return result;
    


}