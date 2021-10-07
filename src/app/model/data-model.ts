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
 * dropdown tree-view
 * Node for to-do item
 */
export class TodoItemNode {
    children!: TodoItemNode[];
    item!: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
    item!: string;
    level!: number;
    expandable!: boolean;
}
 /** data model related to Theme/skin */
export enum FieldStatusType {
    Active,
    Required,
    Error,
    Accept,
    Modified,
    Disabled,
    Help,
    Normal
}
export interface Message {
    header: string;
    content: string;
    icon: string;
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
// for dropdown
export enum MenuExtensionDirection {
    ToLeft,
    ToRight,
}

export enum ButtonThemeColor {
    Basic,
    Primary,
}

