export enum DropdownFieldType {
    Button,
    Icon,
    Default,
}
export enum MenuExtensionDirection {
    ToLeft,
    ToRight,
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