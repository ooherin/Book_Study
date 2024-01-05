//콜백의 매개변수에는 타입을 생략해도된다.

function example(callback: (error: Error, result: string) => void) {}

example((e, r) => {});
example(() => {}); //에러 안남. 콜백에 인자 없어도 ok
