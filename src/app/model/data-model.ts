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
// todo: not used yet
export interface FieldStatus {
    name: string;
    color: string;
    type: FieldStatusType;
}
export enum FieldStatusType {
    Active,
    Required,
    Error,
    Accepted,
    Modified,
    Disabled,
    Help,
    Normal,
    None
}
/**
* these style props are used to create style class name 
* the style classes are located in base.scss
 */
export interface fieldStatusStyle {
    border: number;
    background: number;
    text: number;
}
/**
 * to change the color of svg
 * @param subId the svg could have multiple sub-section 
 */
export interface SvgIconId {
    id: string;
    subId: SvgIconId[];
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

