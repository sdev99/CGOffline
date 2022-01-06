import { IonicNativePlugin ,cordova} from '@ionic-native/core';
/**
 * @name Disk Check Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { DiskCheckPlugin } from '@ionic-native/disk-check-plugin';
 *
 *
 * constructor(private diskCheckPlugin: DiskCheckPlugin) { }
 *
 * ...
 *
 *
 * this.diskCheckPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class DiskCheckPlugin extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    info(options: any): Promise<any>;
}
