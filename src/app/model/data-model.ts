/**
 * All types of data models using Class, Interface and Enum
 */
export interface ArrowIcon {
    upward: string;
    downward: string;
}
export enum DropdownFieldType {
    Button,
    Icon,
    Input,
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

/**
 * Theme
 */

export enum StatusType {
    Active,
    Required,
    Error,
    Accepted,
    Modified,
    Disabled,
    Default
}
export interface StyleType {
    border: number;
    background: number;
    text: number;
}
export enum MenuExtensionDirection {
    ToLeft,
    ToRight,
}

export enum ButtonType {
    Raised,
    Stroked
}

export enum ButtonThemeColor {
    Basic,
    Primary,
}

