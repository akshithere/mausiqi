import { useEffect, useState } from "react";
import { AsyncStorageClient } from "@/util/asyncStorage";
interface isOnboardingCompleteReturn {
  isOnboardingComplete: boolean;
  updateOnboardingToTrue: () => void;
}


export default function useOnboardingComplete(): isOnboardingCompleteReturn {
  console.log('inside the useOnboardingComplete custom hook');
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const data = await AsyncStorageClient.client.getData(
        "isOnboardingComplete"
      );
      console.log('got the data as from checkOnboarding effect: ', data);
      if (data === 'true'){
        console.log('data was true so about to update the local state to true')
        setIsOnboardingComplete(true);
      }
    };
    void checkOnboarding();
  }, []);

  const updateOnboardingToTrue = async () => {
    console.log('updateOnboardingToTrue is running');
    await AsyncStorageClient.client.storeData("isOnboardingComplete", "true");
  };
  return {
    isOnboardingComplete,
    updateOnboardingToTrue,
  };
}
