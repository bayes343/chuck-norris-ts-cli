import { HttpClient, XhrRequestHandler } from 'tsbase/Net/module';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * An XhrRequestHandler implementation that works in node.js contexts
 */
export class NodeXhrRequestHandler extends XhrRequestHandler {
  GetXhrRequest(): XMLHttpRequest {
    if (!this.HttpClient) {
      throw new Error('HttpClient is undefined');
    }
    const xhr = new XMLHttpRequest();
    xhr.timeout = this.HttpClient.Timeout * 1000;
    this.xhrRequests.push(xhr);
    return xhr;
  }
}


export class Http {
  private static instance: Http | null = null;
  public static get Instance(): Http { return this.instance || (this.instance = new Http()); }

  public Client: HttpClient;

  private constructor() {
    const xhrHandler = new NodeXhrRequestHandler();
    this.Client = new HttpClient(xhrHandler);
    xhrHandler.HttpClient = this.Client;
  }
}
