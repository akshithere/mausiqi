import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageClient {
  public static instance: AsyncStorageClient;

  public async storeData(key: string, value: string) {
    try {
      console.log('running storeData');
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error("error writing into the async storage", e);
    }
  }

  public async getData(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.error("error reading from the async storage", e);
    }
  }

  static get client() {
    // ek getter function with static get jo bas uska (class ka, AsyncStorageClient ka) instance(object) dedeta hai 
    if (!this.instance) {
      this.instance = new AsyncStorageClient();
    } 
    return this.instance;
  }
}
