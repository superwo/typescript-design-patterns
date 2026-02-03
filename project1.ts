type TodoList = [
    {
        id: 1;
        text: "Create something";
        completed: false;
    },
    {
        id: 2;
        text: "Learn TypeScript";
        completed: false;
    },
    {
        id: 3;
        text: "Profit";
        completed: false;
    },
];

type AddItem<TList extends TodoList, Id, Text> = [
    ...TList,
    {
        id: Id;
        text: Text;
        completed: false;
    },
];

type RemoveItem<TList extends any[], Id> = TList extends [
    infer First,
    ...infer Rest,
]
    ? First extends { id: Id }
        ? Rest
        : [First, ...RemoveItem<Rest, Id>]
    : [];

const exemple1: AddItem<TodoList, 4, "New Task"> = [
    {
        id: 1,
        text: "Create something",
        completed: false,
    },
    {
        id: 2,
        text: "Learn TypeScript",
        completed: false,
    },
    {
        id: 3,
        text: "Profit",
        completed: false,
    },
    {
        id: 4,
        text: "New Task",
        completed: false,
    },
];

const exemple2: RemoveItem<TodoList, 2> = [
    {
        id: 1,
        text: "Create something",
        completed: false,
    },
    {
        id: 3,
        text: "Profit",
        completed: false,
    },
];

type UpdateText<TList extends unknown[], Id, Text> = TList extends [
    infer First,
    ...infer Rest,
]
    ? First extends { id: Id; completed: infer C }
        ? [
              {
                  id: First["id"];
                  text: Text;
                  completed: C;
              },
              ...Rest,
          ]
        : [First, ...UpdateText<Rest, Id, Text>]
    : [];

const exemple3: UpdateText<TodoList, 2, "Master TypeScript"> = [
    {
        id: 1,
        text: "Create something",
        completed: false,
    },
    {
        id: 2,
        text: "Master TypeScript",
        completed: false,
    },
    {
        id: 3,
        text: "Profit",
        completed: false,
    },
];
type ToggleCompleted<TList, Id> = TList extends [infer First, ...infer Rest]
    ? First extends { id: Id; text: infer T; completed: infer C }
        ? [
              {
                  id: First["id"];
                  text: T;
                  completed: C extends true ? false : true;
              },
              ...Rest,
          ]
        : [First, ...ToggleCompleted<Rest, Id>]
    : [];
const exemple4: ToggleCompleted<TodoList, 3> = [
    {
        id: 1,
        text: "Create something",
        completed: false,
    },
    {
        id: 2,
        text: "Learn TypeScript",
        completed: false,
    },
    {
        id: 3,
        text: "Profit",
        completed: true,
    },
];
type FindById<TList, Id> = TList extends [infer First, ...infer Rest]
    ? First extends { id: Id }
        ? First
        : FindById<Rest, Id>
    : never;

const example5: FindById<TodoList, 2> = {
    id: 2,
    text: "Learn TypeScript",
    completed: false,
};

type FilterBy<TList, Pattern> = TList extends [infer First, ...infer Rest]
    ? First extends Pattern
        ? [First, ...FilterBy<Rest, Pattern>]
        : FilterBy<Rest, Pattern>
    : [];

const example6: FilterBy<TodoList, { completed: false }> = [
    {
        id: 1,
        text: "Create something",
        completed: false,
    },
    {
        id: 2,
        text: "Learn TypeScript",
        completed: false,
    },
    {
        id: 3,
        text: "Profit",
        completed: false,
    },
];
