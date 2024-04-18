const isAdmin = true;
const canWrite = true;

console.log(`Системный фаил ${isAdmin && canWrite}`);
console.log(`Обычный фаил ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный фаил с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);

let a = 7;
if (a === -8 || a === 22) {

}