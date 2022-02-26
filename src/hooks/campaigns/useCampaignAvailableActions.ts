import { useEffect, useState } from 'react';
import { CrossAppCampaign } from '../../types/campaigns';

export default function useCampaignAvailableActions(): CrossAppCampaign | undefined {
  const [campaign, setCampaign] = useState<CrossAppCampaign | undefined>();
  useEffect(() => {
    overwolf.campaigns.crossapp.onAvailableActionUpdated.addListener(setCampaign);

    return () => overwolf.campaigns.crossapp.onAvailableActionUpdated.removeListener(setCampaign);
  }, []);

  return campaign;
}
