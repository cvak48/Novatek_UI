
export class NovaCard<T> {
    id: number;
    title: string;
    type: CardType;
    fields: CardFields<T>;
    constructor(id: number, title: string, type?: CardType, fields?: CardFields<T>) {
        this.id = id;
        this.title = title;
        this.type = type!;
        this.fields = fields!; 
    }
}
enum CardType {
    Task,
    Report
}


interface CardFields<T> {
    id: number;
    title: string;
    links: CardLink<T>[];
    iconUrl: string;
    description: string;
    attachment: CardAttachment[];
    data?: T;
}

interface TaskFields extends CardFields<any> {
    taskId: number;
    type: CardType;
    assignees: Person[];
    reporter: Person;
    priority: TaskPriority;
    status: TaskStatus;
    progress: TaskProgress;
}

interface ReportFields extends CardFields<any> {
    reportId: number;
    type: CardType;
}

interface TaskPriority {
    id: number;
    name: string;
    iconUrl: string;
}

interface CardLink<T> {
    id: number;
    card: NovaCard<T>;
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

interface TaskStatus {
    id: number;
    name: string;
    iconUrl: string;
    color: string;
    description: string;
}

interface TaskProgress {
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