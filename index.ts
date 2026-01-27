type EventType<K extends string = string, D = unknown> = {
    type: K;
    data: D;
};

type GetEventByType<T extends EventType, K extends T["type"]> = T & {
    type: K;
};

type Events = { type: "create"; data: 1 } | { type: "delete"; data: 2 };

type R = GetEventByType<Events, "create">;

const Ev: R = {
    type: "create",
    data: 1,
};
