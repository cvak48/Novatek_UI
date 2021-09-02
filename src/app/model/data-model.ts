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
export interface FieldStatus {
    name: string;
    color: string;
    type: StatusType;
    icon: StatusIconType;
}
export enum StatusType {
    Active,
    Required,
    Error,
    Accepted,
    Modified,
    Disabled,
    Help,
    Normal,
}
export enum StatusIconType {
    CheckMark,
    Exclamation,
    Question,
    Default = 'None'
}
/**
 * to change the color of svg
 * @param subId the svg could have multiple sub-section 
 */
export interface SvgIconId {
    name: string;
    id: string;
    subId: SvgIconId[];
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

