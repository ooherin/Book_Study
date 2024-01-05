//isNever
type IsNever<T> = [T] extends [never] ? true : false;

//에러 검색하는 법
//에러 메세지에 저거힌 에러 코드로 TS에러코드 검색시 해결방법 나옴