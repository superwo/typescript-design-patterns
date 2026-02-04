
type T = { a: string; common: number };
type U = { b: boolean; common: string };

type First<T, U> = {
  [K in keyof (T & U)]: string;
}

type Result = First<T, U> 


type Ex<T, R> = T & R

type Res = Ex<string, number>