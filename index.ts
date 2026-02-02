type TodoList = [
    {
        id: 1;
        text: "Create something";
        completed: false;
    },
];

const ex: TodoList = [
    {
        id: 1,
        text: "Create something",
        completed: false,
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
type RemoveItem<TList extends TodoList, Id> = TList extends [
    infer First,
    ...infer Rest,
]
    ? First extends { id: Id }
        ? [...(Rest & TodoList)]
        : First extends { id: infer FirstId }
          ? [...[First & { id: FirstId }], ...RemoveItem<Rest & TodoList, Id>]
          : []
    : [];
// type UpdateText<TodoList, Id, Text> =
// type ToggleCompleted<TodoLIst, Id> =
// type FindById<TodoList, Id> =
// type FilterBy<TodoList, Pattern> =
