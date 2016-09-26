import { Injectable } from '@angular/core';

declare var window;

/**
 * @name Haptic
 * @description
 * The `Haptic` class interacts with a haptic engine on the device, if available. Generally,
 * Ionic components use this under the hood, but you're welcome to get a bit crazy with it
 * if you fancy.
 *
 * Currently, this uses the Taptic engine on iOS.
 *
 * @usage
 * ```ts
 * export class MyClass{
 *  constructor(haptic: Haptic){
 *    haptic.selection();
 *  }
 * }
 *
 * ```
 */

@Injectable()
export class Haptic {
  constructor() {
    this.plugin = window.TapticEngine;
  }

  available() {
    return !!this.plugin;
  }

  selection() {
    console.log('Haptic selection');

    if(!this.plugin) {
      return;
    }

    this.plugin.selection();
  }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { type: 'success' } (or 'warning'/'error')
   */
  notification(options: { type: string }) {
    console.log('Haptic notification', options);

    if(!this.plugin) {
      return;
    }

    this.plugin.notification(options);
  }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { style: 'light' } (or 'medium'/'heavy')
   */
  impact(options: { style: string }) {
    console.log('Haptic impact', options);

    if(!this.plugin) {
      return;
    }

    this.plugin.impact(options);
  }
}
