/**
 * All types of data models using Class, Interface and Enum
 */

export enum NvIcons {
    Cancel = 'cancel',
}
export enum DropdownFieldType {
    Button,
    Icon,
    Default,
}

export enum ButtonType {
    Raised,
    Stroked
}

export enum ButtonThemeColor {
    Basic,
    Primary,
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
