// question: https://leetcode.com/problems/find-duplicate-file-in-system/
var findDuplicate = function(paths) {
    const map = {};
    for (let text of paths) {
        for (let i = 1, files = text.split(' '); i < files.length; i++) {
            let paren = files[i].indexOf('(');
            let content = files[i].slice(paren + 1, files[i].length - 1);
            map[content] = map[content] || [];
            map[content].push(files[0] + '/' + files[i].slice(0, paren));
        }
    }
    return Object.values(map).filter(dups => dups.length > 1);
};