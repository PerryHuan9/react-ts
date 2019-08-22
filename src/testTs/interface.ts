import {type} from 'os';
// 测试接口

// 使用type
type  Param = {label: string; value: any}
function demo(obj: Param) {
  console.log(obj.label, obj.value, obj);
}
let obj: {label: string, value: any} = {label: '打倒你', value: 888999};
demo(obj);


interface Item {label: String, value: any}
const toDo = (item:Item): void => {
  console.log(item)
};
const item:Item = {label: '打不死你算我输', value: 888666}; 
toDo(item);
toDo({label: 'hello', value: 999, other: 1293} as Item);



//可选属性
interface DataParam {
  id: number;
  name?: string;
  age?: number;
}

const data: DataParam = {id: 123};


//只读属性
interface Point {
  readonly x: number,
  readonly y : number,
}
const point: Point = {x: 0, y: 0};
// point.x = 117; // 报错
console.log(point.x);


// 只读数组 RreadonlyArray
let array:number[] = [12,34,88,99];
let ra:ReadonlyArray<number> = array;
// ra[0] = 999; //修改只读数组，报错
ra = [23,45,56]; // 改变引用对象是可以的
console.log(ra);
// array=ra; //报错，不允许将只读数组赋值给其它数组
let array2:ReadonlyArray<number> = ra 
array = ra as number[]; //使用断言重写之后可以赋值

// const vs. readonly
// const 用于变量的定义， readonly用于属性的定义


// 额外属性验证 
// 在一些情况下，除几个必须的属性外，可能还需要其它非必要属性，这时做法可以如下
interface Teacher {
  id: number;
  name: string;
  age: number;
  [prop: string]: any;
}
interface Student {
  id: number;
  name: string;
  age: number;
  desc: string;
}
function testOther(teacher: Teacher):void {
  console.log(teacher);
}
let student:Student = {id: 999, name: '黄益凛', age: 88, desc: '昨夜星辰昨夜风'}
testOther({id: 999, name: '黄益凛', age: 88, desc: '昨夜星辰昨夜风'});
testOther(student);


// 函数类型接口
interface PlayFunc {
  (game: string, time: Date): boolean
}
const play:PlayFunc = (game: string, time: Date) => {
  console.log(`paly ${game} at ${time.toLocaleDateString()}`)
  return true
}
play('PingPong Ball', new Date());


// 可索引的类型
interface StringArray {
  [index: number]: string
}
let sa: StringArray = ['春花秋月何时了', '往事知多少'];
console.log(sa[0]);

// 支持字符串索引和数字索引, 可同时使用， 但数字索引的返回值必须是字符串索引返回值的子类型
class Tiger {
  big:boolean = false;
}
class Cat extends Tiger {
  small:boolean = true; 
}

interface AnimalObject {
  [index:number] : Cat;
  [prop:string]: Tiger;
}



































export default {}
