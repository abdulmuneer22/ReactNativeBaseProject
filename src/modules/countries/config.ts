import { Region } from '~modules/api';
import { SCREENS_PACKAGE } from '~modules/navigation';

export const STORYBOOK_SCREEN_NAME = `${SCREENS_PACKAGE}.STORYBOOK_SCREEN`;
export const MENU_SCREEN_NAME = `${SCREENS_PACKAGE}.MENU_SCREEN`;
export const COUNTRIES_SCREEN_NAME = `${SCREENS_PACKAGE}.COUNTRIES_SCREEN`;
export const SELECT_REGION_SCREEN_NAME = `${SCREENS_PACKAGE}.SELECT_REGION_SCREEN`;
export const COUNTRY_DETAILS_SCREEN_NAME = `${SCREENS_PACKAGE}.COUNTRY_DETAILS_SCREEN`;

export const regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
