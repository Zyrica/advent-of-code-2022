const directSizes = {};
const sizes = {};

export function task1(input) {
  const root = {};
  const folders = {
    '/': root,
  };
  let path;
  input.forEach(i => {
    const a = i.split(' ');
    if (a[0] === '$') { // input

      if (a[1] === 'cd') {
        if (a[2] === '/') {
          path = '/';
        } else if (a[2] === '..') {
          path = path.split('/').slice(0, -2).join('/') + '/';
        } else {
          path += a[2] + '/';
        }
        if (!folders[path]) folders[path] = {};
      }
    } else { // output
      if (a[0] === 'dir') {
      } else {
        const folder = folders[path];
        folder[a[1]] = Number(a[0]);
      }
    }
  });
  // Add direct content sizes
  Object.keys(folders).forEach(path => {
    const folder = folders[path];
    const size = Object.values(folder).reduce((a, v) => a + v, 0);
    directSizes[path] = size;
  });

  function isSubfolder(parentPath, childpath) {
    return parentPath.length < childpath.length && childpath.substring(0, parentPath.length) === parentPath;
  }

  // Add child folder sizes
  Object.keys(folders).forEach(path => {
    const childrenPaths = Object.keys(folders).filter(p => isSubfolder(path, p));
    sizes[path] = directSizes[path] + childrenPaths.map(p => directSizes[p]).reduce((a, v) => a + v, 0);
  });

  return Object.values(sizes).filter(s => s <= 100000).reduce((a, v) => a + v, 0);
}

const totalSize = 70000000;
const requiredEmpty = 30000000;

export function task2(input) {
  const freeSpace = totalSize - sizes['/'];
  const minDelete = requiredEmpty - freeSpace;
  return Object.entries(sizes).filter(([path, size]) => size >= minDelete).sort((a, b) => a[1] - b[1])[0][1];
}
