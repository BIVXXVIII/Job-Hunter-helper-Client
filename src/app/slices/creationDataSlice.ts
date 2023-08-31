import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    MarkerType,
    VacancyType,
    MarkersGroup,
    ContextStatus,
    ProjectType,
} from "@/assets/types&props/types";

type State = {
    vacancies: VacancyType[];
    markers: MarkerType[];
    groups: MarkersGroup[];
    project: ProjectType | null;
};

const initialState: State = {
    vacancies: [],
    markers: [],
    groups: [],
    project: null,
};

const linkDispatcher = (link: string) => {
    const deconstructLink = link.split("/");
    if (deconstructLink[0] === "https:" || deconstructLink[0] === "http:") {
        return deconstructLink[2];
    } else {
        return deconstructLink[0];
    }
};

const removeMarker = (target: string[], marker: string) => {
    return target.filter((markerId) => markerId !== marker);
};

export const creationData = createSlice({
    name: "vacancys Data",
    initialState,
    reducers: {
        // create actions
        createVacancy: (state, action: PayloadAction<string>) => {
            state.vacancies.push({
                siteName: linkDispatcher(action.payload),
                id: `vacancy%${new Date().toISOString()}`,
                url: action.payload,
                markersId: [],
            });
        },
        createMarker: (state, action: PayloadAction<MarkerType>) => {
            state.markers.push(action.payload);
        },
        createGroup: (state, action: PayloadAction<MarkersGroup>) => {
            state.groups.push(action.payload);
        },
        // update marker dependency actions
        addMarkerToVacancy: (
            state,
            action: PayloadAction<{ markerId: string; vacancyId: string }>
        ) => {
            const targetVacancy = state.vacancies.find(
                (vacancy) => vacancy.id === action.payload.vacancyId
            )!;
            targetVacancy.markersId.push(action.payload.markerId);
        },
        removeMarkerFromVacancy: (
            state,
            action: PayloadAction<{ markerId: string; vacancyId: string }>
        ) => {
            const target = state.vacancies.find(
                (vacancy) => vacancy.id === action.payload.vacancyId
            )!;
            target.markersId = removeMarker(
                target.markersId,
                action.payload.markerId
            );
        },
        addMarkerToGroup: (
            state,
            action: PayloadAction<{ groupId: string; markerId: string }>
        ) => {
            const targetGroup = state.groups.find(
                (group) => group.id === action.payload.groupId
            )!;
            targetGroup.markersId.push(action.payload.markerId);
        },
        removeMarkerFromGroup: (
            state,
            action: PayloadAction<{ groupId: string; markerId: string }>
        ) => {
            const target = state.groups.find(
                (group) => group.id === action.payload.groupId
            )!;
            target.markersId = removeMarker(
                target.markersId,
                action.payload.markerId
            );
        },
        // delete actions
        deleteVacancy: (state, action: PayloadAction<string>) => {
            state.vacancies = state.vacancies.filter(
                (vacancy) => vacancy.id !== action.payload
            );
        },
        deleteMarker: (state, action: PayloadAction<string>) => {
            state.vacancies.forEach(
                (vacancy) =>
                    (vacancy.markersId = vacancy.markersId.filter(
                        (markerId) => markerId !== action.payload
                    ))
            );
            state.groups.forEach(
                (group) =>
                    (group.markersId = group.markersId.filter(
                        (markerId) => markerId !== action.payload
                    ))
            );
            state.markers = state.markers.filter(
                (marker) => marker.id !== action.payload
            );
        },
        deleteGroup: (state, action: PayloadAction<string>) => {
            state.groups = state.groups.filter(
                (group) => group.id !== action.payload
            );
        },
        updateGroupContext: (
            state,
            action: PayloadAction<{ groupId: string; context: ContextStatus }>
        ) => {
            state.groups.find(
                (group) => group.id === action.payload.groupId
            )!.groupStatus = action.payload.context;
        },
        updateMarkerContext: (
            state,
            action: PayloadAction<{ markerId: string; context: ContextStatus }>
        ) => {
            state.markers.find(
                (marker) => marker.id === action.payload.markerId
            )!.markerStatus = action.payload.context;
        },
        createProjectPrototype: (state, action: PayloadAction<ProjectType>) => {
            state.project = action.payload;
        },
        updateProjectMarkers: (state, action: PayloadAction<string[]>) => {
            const dependenciesMarkers = action.payload;
            const groups = state.groups;
            const vacancies = state.vacancies;
            const groupsDependency: string[] = [];
            const vacanciesDependency: string[] = [];

            dependenciesMarkers.forEach((markerId) => {
                groups
                    .filter((group) => group.markersId.includes(markerId))
                    .forEach((group) => {
                        if (groupsDependency.includes(group.id)) return;
                        groupsDependency.push(group.id);
                    });
            });
            dependenciesMarkers.forEach((markerId) => {
                vacancies
                    .filter((vacancy) => vacancy.markersId.includes(markerId))
                    .forEach((vacancy) => {
                        if (vacanciesDependency.includes(vacancy.id)) return;
                        vacanciesDependency.push(vacancy.id);
                    });
            });
            state.project!.dependencies.markersId = dependenciesMarkers;
            state.project!.dependencies.markerGroupsId = groupsDependency;
            state.project!.dependencies.vacanciesId = vacanciesDependency;
        },
    },
});

export const {
    createVacancy,
    createMarker,
    createGroup,
    addMarkerToVacancy,
    addMarkerToGroup,
    removeMarkerFromGroup,
    removeMarkerFromVacancy,
    deleteVacancy,
    deleteMarker,
    deleteGroup,
    updateGroupContext,
    updateMarkerContext,
    createProjectPrototype,
    updateProjectMarkers,
} = creationData.actions;

export default creationData.reducer;
