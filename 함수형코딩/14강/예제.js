/**
 *
 * @param {object} 업데이트하고 싶은 대상(객체)를 지정합니다.
 * @param {string} 객체에서 업데이트하고 싶은 속성을 지정합니다.
 * @param {any} 속성을 업데이트할 함수를 넣습니다.
 * @returns 업데이트한 값이 나옵니다.
 */
function update(obj, key, modify) {
  let value = obj[key];
  let newObj = modify(value);
  return newObj;
}

//사용
const employee = {
  name: "kim",
  salary: 1000,
};
function raise10Percent(salary) {
  return salary * 1.1;
}

update(employee, salary, raise10Percent);

//369
//만약 중첩된 객체에서 update를 사용하고 싶다면?
//중첩된 update를 사용하면 된다.

const shift = {
  name: "shirt",
  price: 13,
  options: {
    color: "blue",
    size: 3,
  },
};
function incrementSize(item) {
  return update(item, "options", function (options) {
    return update(options, "size", increment);
  });
}
