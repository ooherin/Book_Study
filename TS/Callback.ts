//콜백의 매개변수에는 타입을 생략해도된다.

function example(callback: (error: Error, result: string) => void) {}

example((e, r) => {});
example(() => {}); //에러 안남. 콜백에 인자 없어도 ok

//매개변수는 이변성을 갖는다
function a(x: string): number {
  return 0;
}

type B = (x: string | number) => number;
//let b: B = a; ❌
//(x: string) => number' 형식은 'B' 형식에 할당할 수 없습니다.
// 'x' 및 'x' 매개 변수의 형식이 호환되지 않습니다.
// 'string | number' 형식은 'string' 형식에 할당할 수 없습니다.
//   'number' 형식은 'string' 형식에 할당할 수 없습니다.
