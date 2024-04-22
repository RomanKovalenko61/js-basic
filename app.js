function canAccessWebsite(age) {
    if (age < 18) {
        return 'Нет';
    }
    return 'Да';
}

console.log(canAccessWebsite(18));

const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';

console.log(canAccessWebsite2(18));