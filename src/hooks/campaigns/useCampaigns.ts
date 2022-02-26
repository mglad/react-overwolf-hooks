import { useCallback } from 'react';
import { CrossAppCampaign, CrossAppCampaignConversion } from '../../types/campaigns';

type Campaigns = {
  getAvailableActions: () => Promise<CrossAppCampaign[]>;
  set: (campaign: CrossAppCampaign) => Promise<void>;
  reportConversion: (conversionInfo: CrossAppCampaignConversion) => Promise<void>;
  consumeConversions: () => Promise<CrossAppCampaignConversion[]>;
};

export default function useCampaigns(): Campaigns {
  const getAvailableActions = useCallback(() => new Promise<CrossAppCampaign[]>(
    (resolve, reject) => {
      overwolf.campaigns.crossapp.getAvailableActions((result) => {
        if (result.success) {
          resolve(result.actions);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const set = useCallback((campaign: CrossAppCampaign) => new Promise<void>(
    (resolve, reject) => {
      overwolf.campaigns.crossapp.set(campaign, (result) => {
        if (result.success) {
          resolve();
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const reportConversion = useCallback((
    conversionInfo: CrossAppCampaignConversion,
  ) => new Promise<void>(
    (resolve, reject) => {
      overwolf.campaigns.crossapp.reportConversion(conversionInfo, (result) => {
        if (result.success) {
          resolve();
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const consumeConversions = useCallback(() => new Promise<CrossAppCampaignConversion[]>(
    (resolve, reject) => {
      overwolf.campaigns.crossapp.consumeConversions((result) => {
        if (result.success) {
          resolve(result.conversions);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  return {
    getAvailableActions,
    set,
    reportConversion,
    consumeConversions,
  };
}
