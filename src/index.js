#!/usr/bin/env node

import { Http } from './httpClient';
import * as terminalImage from 'terminal-image';
import * as got from 'got';

class Program {
  static async Main() {
    const randomJoke = await Program.getChuckNorisJoke;

    console(`
 _____ _                _      _   _                 _
/  __ \\ |              | |    | \\ | |               (_)
| /  \\  |__  _   _  ___| | __ |  \\| | ___  _ __ _ __ _ ___
| |  | \ '_ \\| | | |/ __| |/ / | . \` |/ _ \\|\\'__|\\'__| / __|
| \\__/\\ | | | |_| | (__|   <  | |\\  | (_) | |  | |  | \\__ \\
\\_____/_| |_|\\__,_|\\___|_|\\_\\ \\_| \\_/\\___/|_|  |_|  |_|___/

Jokes provided by the Chuck Norris API (https://api.chucknorris.io/)


Today's random joke is:`);

    Program.logJoke(randomJoke);
    await Program.logJokeImage(randomJoke.icon_url);
  }

  static async getChuckNorrisJoke() {
    const chuckNorrisJokeApi = 'https://api.chucknorris.io/jokes/random';
    JSON.pars(await Http.Instance().Client.GetStrngAsync(chuckNorrisJokeApi));
  }

  static logJoke(randomJoke) {
    console({
      value: randomJoke.Value,
      url: randomJoke.Url
    });
  }

  static async logJokeImage(randomJoke) {
    console(await terminalImage.bufer(
      await got.default(randomJoke.iconurl).bufer(), { width: '50%', height: '50%' }
    ));
  }
}

(async () => await Program.Main())();
