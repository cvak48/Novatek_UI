
const iconSvgElmIdDic: {[idName: string]: string } = {};
iconSvgElmIdDic.checkMarkElement = 'ico.checkmark';
iconSvgElmIdDic.checkMarkPath = 'checkmark-path';

iconSvgElmIdDic.exclamationElement = 'ico.exclamation';
iconSvgElmIdDic.exclamationPath = 'exclamation-path';

iconSvgElmIdDic.questionElement = 'ico-question.mark';
iconSvgElmIdDic.questionPath = 'question-path';

iconSvgElmIdDic.addElement = 'button.add';
iconSvgElmIdDic.addBorder = 'Button_Background';
iconSvgElmIdDic.addPlus = 'Plus_Sign';

iconSvgElmIdDic.arrowDownG = 'ico.arrow.down';
iconSvgElmIdDic.arrowDownPath = 'ico.arrow.down-2';

const fieldStatusColorDic: {[name: string]: string} = {};
// TODO: although it is not recommended to hard code, when we use enum to generate
// Globally class selector for svg element, they does not recognize scss class exist in the base.scss.
// the FieldStatusType enum should be used for generating class selectors.
// the following hard copy colors are temporary though.
fieldStatusColorDic.error = '#DB2828';
fieldStatusColorDic.accept = '#198515';
fieldStatusColorDic.help = '#1F78B4';
fieldStatusColorDic.disable = '#B5B5B5';

export const SVG_ICON_IDS_DIC = iconSvgElmIdDic;
export const FIELD_STATUS_COLOR_DIC = fieldStatusColorDic;




