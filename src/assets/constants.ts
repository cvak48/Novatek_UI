import { SvgIconId, FieldStatusType, FieldStatus } from './../app/model/data-model';

const checkMark = {
    id: 'ico.checkmark',
    subId: { checkMarkPath : {
        id: 'checkmark-path'
    }  },
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
export const SVG_ICONS_IDS = { checkMark: checkMark, exclamation: exclamation,
     question: question, add: add };

export const FIELD_STATUS_COLOR = {
    // TODO: 
    error : { name: 'error', type: FieldStatusType.Error, color: '#DB2828' } as FieldStatus ,
    accept : { name: 'accept', type: FieldStatusType.Accepted, color: '#198515' } as FieldStatus ,
    help : { name: 'help', type: FieldStatusType.Help, color: '#1F78B4' } as FieldStatus
};



