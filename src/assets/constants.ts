import { SvgIconId, StatusType, FieldStatus } from './../app/model/data-model';

const checkmark: SvgIconId = {
    name: 'checkmark',
    id: 'ico.checkmark',
    subId: [{
        name: 'path',
        id: 'checkmark-path'
    } as SvgIconId]
};
const exclamation: SvgIconId = {
    name: 'exclamation',
    id: 'ico.exclamation',
    subId: [{
        name: 'path',
        id: 'exclamation-path'
    } as SvgIconId]
};
const question: SvgIconId = {
    name: 'question',
    id: 'ico-question.mark',
    subId: [{
        name: 'path',
        id: 'question-path'
    } as SvgIconId]
};
const add: SvgIconId = {
    name: 'add',
    id: 'button.add',
    subId: [{
        name: 'border',
        id: 'Button_Background'
    } as SvgIconId, {
        name: 'plus',
        id: 'Plus_Sign'
    } as SvgIconId]
};
export const SVG_ICONS_IDS: SvgIconId[] = [checkmark, exclamation, question, add];
export const FIELD_STATUS_COLOR: FieldStatus[] = [
    // TODO: 
    { name: 'error', type: StatusType.Error, color: '#DB2828' } as FieldStatus,
    { name: 'accept', type: StatusType.Accepted, color: '#198515' } as FieldStatus,
    { name: 'help', type: StatusType.Help, color: '#1F78B4' } as FieldStatus
];



