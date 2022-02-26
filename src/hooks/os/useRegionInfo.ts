import { useState, useEffect } from 'react';
import { RegionInfo } from '../../types/os';

export default function useRegionInfo(): RegionInfo | undefined {
  const [regionInfo, setRegionInfo] = useState<RegionInfo | undefined>();

  useEffect(() => {
    overwolf.os.getRegionInfo((result) => {
      if (result.success) {
        setRegionInfo(result.info);
      }
    });
  }, []);
  return regionInfo;
}
