/**
 * All types of data models using Class, Interface and Enum
 */
// TODO: Register Icons or use library
export enum NvIcons {
    Cancel = 'cancel',
}
export interface ArrowIcon {
    upward: string;
    downward: string;
}

export enum DropdownFieldType {
    Button,
    Icon,
    Default,
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

