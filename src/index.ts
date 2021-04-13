#!/usr/bin/env node

import { Http } from './httpClient';
import { ChuckNorrisJoke } from './chuckNorrisJoke';
import * as terminalImage from 'terminal-image';
const got = require('got');

class Program {
  static async Main() {
    const randomJoke = await Program.getChuckNorrisJoke();

    console.log(`
 _____ _                _      _   _                 _
/  __ \\ |              | |    | \\ | |               (_)
| /  \\  |__  _   _  ___| | __ |  \\| | ___  _ __ _ __ _ ___
| |  | \'_ \\| | | |/ __| |/ / | . \` |/ _ \\|\\'__|\\'__| / __|
| \\__/\\ | | | |_| | (__|   <  | |\\  | (_) | |  | |  | \\__ \\
\\_____/_| |_|\\__,_|\\___|_|\\_\\ \\_| \\_/\\___/|_|  |_|  |_|___/

Jokes provided by the Chuck Norris API (https://api.chucknorris.io/)


Today's random joke is:`);

    Program.logJoke(randomJoke);
    await Program.logJokeImage(randomJoke);
  }

  private static async getChuckNorrisJoke() {
    const chuckNorrisJokeApi = 'https://api.chucknorris.io/jokes/random';
    const randomJoke = JSON.parse(await Http.Instance.Client.GetStringAsync(chuckNorrisJokeApi)) as ChuckNorrisJoke;
    return randomJoke;
  }

  private static logJoke(randomJoke: ChuckNorrisJoke) {
    console.log({
      value: randomJoke.value,
      url: randomJoke.url
    });
  }

  private static async logJokeImage(randomJoke: ChuckNorrisJoke) {
    console.log(await terminalImage.buffer(
      await got(randomJoke.icon_url).buffer(), { width: '50%', height: '50%' }
    ));
  }
}

(async () => await Program.Main())();
