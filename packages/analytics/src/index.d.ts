import { ReactNativeFirebaseModule } from '@react-native-firebase/app-types';

export class FirebaseAnalyticsModule extends ReactNativeFirebaseModule {
  /**
   * Log a custom event with optional params.
   * Note: 100 characters is the maximum length for param names.
   *
   * @param name
   * @param params
   */
  logEvent(name: string, params: Object): Promise<void>;

  /**
   * If true, allows the device to collect analytical data and send it to Firebase.
   * Useful for GDPR.
   *
   * @param enabled
   */
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<void>;

  /**
   * Sets the current screen name.
   *
   * NOTE: Whilst screenClassOverride is optional, it is recommended it is
   * always sent as your current class name. For example on Android it will always
   * show as 'MainActivity' if you do not specify it.
   *
   * @param screenName
   * @param screenClassOverride
   */
  setCurrentScreen(screenName: string, screenClassOverride: string): Promise<void>;

  /**
   * Sets the minimum engagement time required before starting a session.
   *
   * @param milliseconds The default value is 10000 (10 seconds).
   */
  setMinimumSessionDuration(milliseconds: number): Promise<void>;

  /**
   * Sets the duration of inactivity that terminates the current session.
   *
   * @param milliseconds The default value is 1800000 (30 minutes).
   */
  setSessionTimeoutDuration(milliseconds: number): Promise<void>;

  /**
   * Gives a user a unique identification.
   *
   * @param id Set to null to remove a previously assigned id from analytics events.
   */
  setUserId(id: string | null): Promise<void>;

  /**
   * Sets a key/value pair of data on the current user.
   *
   * @param name
   * @param value Set to null to remove a previously assigned id from analytics events.
   */
  setUserProperty(name: string, value: string | null): Promise<void>;

  /**
   * Sets multiple key/value pair of data on the current user.
   *
   * @ReactNativeFirebase
   * @param properties Set a property value to null to remove it.
   */
  setUserProperties(properties: { [key: string]: string | null }): Promise<void>;
}

declare module '@react-native-firebase/app-types' {
  interface ReactNativeFirebaseNamespace {
    /**
     * Analytics integrates across Firebase features and provides
     * you with unlimited reporting for up to 500 distinct events
     * that you can define using the Firebase SDK. Analytics reports
     * help you understand clearly how your users behave, which enables
     * you to make informed decisions regarding app marketing and
     * performance optimizations.
     */
    analytics?: {
      (): FirebaseAnalyticsModule;
    };
  }

  interface FirebaseApp {
    /**
     * Analytics integrates across Firebase features and provides
     * you with unlimited reporting for up to 500 distinct events
     * that you can define using the Firebase SDK. Analytics reports
     * help you understand clearly how your users behave, which enables
     * you to make informed decisions regarding app marketing and
     * performance optimizations.
     */
    analytics?(): FirebaseAnalyticsModule;
  }
}
