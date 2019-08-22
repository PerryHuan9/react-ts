
export default function testVariable(): void {
  let bool: boolean = true;
  let num: number = 188;
  let num2: number = 0xff;
  const str: string = `hello word ${bool}`;
  const arr: number[] = [12,34,45,65];
  const arr2: Array<string> = ['hello', 'word']
  const tuple: [String, Number] = ['',12]
  enum Color {Red, Blue, Yello}
  let color:Color = Color.Red;
  let redName:string = Color[color];
  console.log(redName);
  enum Animal {Dog=666, Cat, Pin}
  console.log(Animal);
  // Any
  let anyVar: any = 'hello'
  anyVar = 888;

  let obj: object = {a: '上山打老虎'}
  let anyArr: any [] = [12,'', true];

  // void 类型的值只能是undefined或null
  let voidVar:void = undefined;

  // null和undefined类型
  let nullVar: null = null;
  const undefVar: undefined = undefined;

  // never类型， 永不存在的类型
  function testNever(name:object|null): never {
    throw new Error();
  }

  // 类型断言
  let a:any = 'this is a book.';
  let len:number  = (a as string).length;
  let len2:number = (<string>a).length;
  console.log(len, len2);

  type C ={a: string, b: number}
  let object: C ;
  object = {a: '', b: 132};
  console.log(object)
  
}



testVariable();