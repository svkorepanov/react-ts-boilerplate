/*
 * DeepReadonly делает именно то, что можно предположить из его названия.
 * Он рекурсивно превращает типы в Readonly.
 * Единственное ограничение - вложенные массивы (типа any[][]).
 */

type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: T[P] extends Function
        ? T[P] // copy methods as is
        : DeepReadonly<T[P]>; // make all other properties DeepReadonly
};

type ReadonlyObjOrPlain<T> = T extends object
    ? DeepReadonlyObject<T> //
    : T; // just copy plain types

export type DeepReadonly<T> = T extends any[]
    ? ReadonlyArray<ReadonlyObjOrPlain<T[number]>> // here we create
    : ReadonlyObjOrPlain<T>;
