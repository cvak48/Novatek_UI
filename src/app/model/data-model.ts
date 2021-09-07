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
 * data model related to Theme/skin
 */
export enum FieldStatusType {
    Active,
    Required,
    Error,
    Accepted,
    Modified,
    Disabled,
    Help,
    Normal
}
/**
 * These style props are used to create style class name
 * The style classes are located in base.scss
 */
export interface FieldStatusStyle {
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

