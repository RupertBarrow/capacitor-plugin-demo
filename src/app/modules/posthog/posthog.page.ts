import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
//import { Posthog } from '@capawesome/capacitor-posthog';
import { posthog } from 'posthog-js';

@Component({
  selector: 'app-posthog',
  templateUrl: './posthog.page.html',
  styleUrls: ['./posthog.page.scss'],
})
export class PosthogPage {
  public formGroup = new UntypedFormGroup({
    apiKey: new UntypedFormControl(''),
    host: new UntypedFormControl(''),
  });

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async alias(): Promise<void> {
    /*
    await Posthog.alias({
      alias: 'alias',
    });
    */
  }

  public async capture(): Promise<void> {
    /*
    await Posthog.capture({
      event: 'test',
      properties: {
        key: 'value',
      },
    });
    */
    posthog.capture('test', {
      key: 'value',
    });
  }

  public async flush(): Promise<void> {
    /*
    await Posthog.flush();
    */
  }

  public async identify(): Promise<void> {
    /*
    await Posthog.identify({
      distinctId: 'distinctId',
    });
    */
  }

  public async register(): Promise<void> {
    /*
    await Posthog.register({
      key: 'key',
      value: 'value',
    });
    */
  }

  public async reset(): Promise<void> {
    await posthog.reset();
  }

  public async screen(): Promise<void> {
    /*
    await Posthog.screen({
      screenTitle: 'screenTitle',
      properties: {
        key: 'value',
      },
    });
    */
  }

  public async setup(): Promise<void> {
    const apiKey = this.formGroup.get('apiKey')?.value;
    const host = this.formGroup.get('host')?.value;

    /*
    await Posthog.setup({
      apiKey: 'phc_go1WG8cYBkAXIYDWJC4BJdtsl7Xhlhc7B6zTKrIMCLp',
      host: 'https://eu.i.posthog.com',
    });
    */

    posthog.init('phc_go1WG8cYBkAXIYDWJC4BJdtsl7Xhlhc7B6zTKrIMCLp', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
    });
  }

  public async unregister(): Promise<void> {
    /*
    await Posthog.unregister({
      key: 'key',
    });
    */
  }
}
