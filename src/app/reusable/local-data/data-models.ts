
export class NovaCard {
    id: number;
    title: string;
    type: CardType;
    fields: CardFields;
    constructor(id: number, title: string, type?: CardType, fields?: CardFields) {
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


interface CardFields {
    id: number;
    title: string;
    links: CardLink[];
    iconUrl: string;
    description: string;
    attachment: CardAttachment[];

}

interface TaskFields extends CardFields {
    taskId: number;
    type: CardType;
    assignees: Person[];
    reporter: Person;
    priority: TaskPriority;
    status: TaskStatus;
    progress: TaskProgress;
}

interface ReportFields extends CardFields {
    reportId: number;
    type: CardType;
}

interface TaskPriority {
    id: number;
    name: string;
    iconUrl: string;
}

interface CardLink {
    id: number;
    card: NovaCard;
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