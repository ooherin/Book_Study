//if문과 비슷함
type A1 = string;

type B1 = A1 extends string ? number : boolean;
//number

//컨디셔널 타입을 통해 타입을 유추할 수도 있음
type Result = "hi" extends string ? true : false; //true
type Result2 = [1] extends [number] ? true : false; //true

//never랑 사용하는 경우
type Start = string | number;
type New = Start extends string | number ? Start[] : never;

//위의 예제는 사실 별로 의미가 없음
//제네릭이랑 같이 사용할 때 의미가 있음
type ChooseArray<A> = A extends string ? string[] : never;
type StringArray = ChooseArray<string>; //string[]
type NeverArray = ChooseArray<never>; //never

//참고로 never는 모든 타입에 대입할 수 있기 때문에 모든 타입을 extends할 수 있다.
type NeverExtendsEveryType = never extends string ? true : false;
//true

//컨디셔널 타입 분배법칙
type Result4<Key> = Key extends string ? Key[] : never;
type StringOrNumber = string | number;
let StringArray: Result4<StringOrNumber> = ["hi"];

//분배법칙을 막아야 하는 사례
type IsString<T> = T extends string ? true : false;
type ResultShouldFalse = IsString<"hi" | 3>; //boolean

//이를 막으려면 배열로 제네릭을 감싸면 된다.
type IsString1<T> = [T] extends [string] ? true : false;
type ResultShouldFalse1 = IsString<"hi" | 3>; //false

const Conditional = 1;
export default Conditional;
