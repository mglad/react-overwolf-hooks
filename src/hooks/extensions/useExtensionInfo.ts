import { useEffect, useState } from 'react';
import { Info } from '../../types/extensions';

export default function useExtensionInfo(id: string): Info | undefined {
  const [info, setInfo] = useState<Info | undefined>();

  useEffect(() => {
    overwolf.extensions.registerInfo(id, setInfo, () => { });
    return () => overwolf.extensions.unregisterInfo(id, () => { });
  }, [id]);

  return info;
}
