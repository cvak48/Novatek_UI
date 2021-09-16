
/**
 * This constant ids are used in svg related directives as an reference to change the style
 */
const SVG_ICON_IDS_DIC: { [idName: string]: string } = {};
SVG_ICON_IDS_DIC.checkMarkElement = 'ico.checkmark';
SVG_ICON_IDS_DIC.checkMarkPath = 'checkmark-path';

SVG_ICON_IDS_DIC.exclamationElement = 'ico.exclamation';
SVG_ICON_IDS_DIC.exclamationPath = 'exclamation-path';

SVG_ICON_IDS_DIC.questionElement = 'ico-question.mark';
SVG_ICON_IDS_DIC.questionPath = 'question-path';

SVG_ICON_IDS_DIC.addElement = 'button.add';
SVG_ICON_IDS_DIC.addBorder = 'Button_Background';
SVG_ICON_IDS_DIC.addPlus = 'Plus_Sign';

SVG_ICON_IDS_DIC.arrowDownG = 'ico.arrow.down';
SVG_ICON_IDS_DIC.arrowDownPath = 'ico.arrow.down-2';

SVG_ICON_IDS_DIC.cancelElement = 'ico.item.deleted';
SVG_ICON_IDS_DIC.cancelPath = 'cancel-path';


const FIELD_STATUS_COLOR_DIC: { [name: string]: string } = {};
/**
 * TODO: when we use enum to generate globally class selector for svg element, they does not recognize scss class existing in the base.scss.
 * the hard coded color use temporarily and need to be addressed!
 * the FieldStatusType enum should be used for generating class selectors.
 */

FIELD_STATUS_COLOR_DIC.error = '#DB2828';
FIELD_STATUS_COLOR_DIC.accept = '#198515';
FIELD_STATUS_COLOR_DIC.help = '#1F78B4';
FIELD_STATUS_COLOR_DIC.disable = '#B5B5B5';

export { SVG_ICON_IDS_DIC, FIELD_STATUS_COLOR_DIC }





