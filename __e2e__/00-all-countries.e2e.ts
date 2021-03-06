import { expect } from 'detox';

import { testIDs } from '~config';

import { byId, disableAndroidEmulatorAnimations } from './utils';

describe('00-all-countries', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byId(testIDs.menu.allCountries)).toBeVisible();
      await expect(byId(testIDs.menu.countriesByRegion)).toBeVisible();
    });

    it('opens all countries', async () => {
      await byId(testIDs.menu.allCountries).tap();
      await expect(byId(testIDs.countries.back)).toBeVisible();
      await byId(testIDs.countries.back).tap();
      await expect(byId(testIDs.menu.allCountries)).toBeVisible();
    });
  });

  describe('AllCountries', () => {
    it('renders all countries', async () => {
      await byId(testIDs.menu.allCountries).tap();
    });

    it('scrolls', async () => {
      await byId(testIDs.countries.scrollContainer).scroll(200, 'down');
      await byId(testIDs.countries.scrollContainer).scrollTo('top');
    });

    it('opens country details', async () => {
      await byId(testIDs.countries.country).atIndex(0).tap();
      await expect(byId(testIDs.countryDetails.back)).toBeVisible();
      await byId(testIDs.countryDetails.back).tap();
      await expect(byId(testIDs.countries.back)).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byId(testIDs.countries.country).atIndex(0).tap();
      await expect(byId(testIDs.countryDetails.back)).toBeVisible();
    });

    it('scrolls', async () => {
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('bottom');
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('top');
    });
  });
});
