export type VacancyType = {
    siteName: string;
    id: string;
    url: string;
    markersId: string[];
};
export type MarkerType = {
    title: string;
    id: string;
    markerStatus?: ContextStatus;
};
export type MarkersGroup = {
    title: string;
    id: string;
    style: GroupColorName;
    markersId: string[];
    groupStatus?: ContextStatus;
};

export type GroupColorName =
    | "default"
    | "lime"
    | "blue"
    | "red"
    | "gray"
    | "white"
    | "purple";

export type GroupColor = {
    name: GroupColorName;
    style: string;
};

export type ContextStatus =
    | "ready"
    | `think I'm ready`
    | `think I'm not ready`
    | "not-ready"
    | "unset"
    | "averadge";

export type ProjectType = {
    id: string;
    title: string;
    description?: string;
    creationTime: string;
    timeLimit: "default" | "long" | "short";
    dependencies: {
        vacanciesId: string[];
        markersId: string[];
        markerGroupsId: string[];
    };
};
