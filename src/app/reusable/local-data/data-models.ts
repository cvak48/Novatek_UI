import { NvCardComponent } from './../nv-card/nv-card.component';
import { NvUserColor } from './view-model';

// TODO: In the re-usable folder we do not need local-data => please move it into model folder, data-model
export enum CardType {
    Task,
    Report
}

export interface CardFields {
    id: number;
    title: string;
    links: CardLink[];
    iconUrl: string;
    color: NvUserColor;
    description: string;
    attachment: CardAttachment[];
}

export interface TaskFields extends CardFields {
    taskId: number;
    type: CardType;
    assignees: Person[];
    reporter: Person;
    priority: TaskPriority;
    status: TaskStatus;
    progress: TaskProgress;
}

export interface ReportFields extends CardFields {
    reportId: number;
    type: CardType;
}

export interface TaskPriority {
    id: number;
    name: string;
    iconUrl: string;
}

export interface CardLink {
    id: number;
    card: NvCardComponent;
}

export interface Person {
    id: number;
    name: string;
    imageUrl: string;
    notification?: Notification;
}
export interface Notification {
    number?: number | any;
    content?: string;
    hasAttachment?: boolean;
}

export interface TaskStatus {
    id: number;
    name: string;
    iconUrl: string;
    color: string;
    description: string;
}

export interface TaskProgress {
    progress: number;
    total: number;
}

export interface CardAttachment {
    id: number;
    fileName: string;
    fileUrl: string;
    thumbnail: string;
    size: number;
    createdDate: Date;
    author: Person;
}