/**
 * Chargebee Copy Management API
 * Chargebee Copy Management API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore

/* tslint-disable */

import CBClient from "@/app/utils/common/core/cb-client";
const BASE_PATH = "/chargebee/chargebee-localiser/1.0.0".replace(/\/+$/, "");
/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: "RequiredError" = "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string;
  headers: any;
  queryParams: any;
  body?: any
}

/**
 * 
 * @export
 * @interface Branch
 */
export interface Branch {
  /**
   * 
   * @type {number}
   * @memberof Branch
   */
  'id'?: number;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'description'?: string;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'liveVersionId'?: string;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'draftVersionId'?: string;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'createdAt'?: string;
  /**
   * 
   * @type {string}
   * @memberof Branch
   */
  'updatedAt'?: string;
}

/**
 * 
 * @export
 * @interface Collection
 */
export interface Collection {
  /**
   * 
   * @type {number}
   * @memberof Collection
   */
  'id'?: number;
  /**
   * 
   * @type {string}
   * @memberof Collection
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof Collection
   */
  'handle'?: string;
  /**
   * 
   * @type {string}
   * @memberof Collection
   */
  'description'?: string;
  /**
   * 
   * @type {number}
   * @memberof Collection
   */
  'keysCount'?: number;
}

/**
 * 
 * @export
 * @interface CreateBranchInput
 */
export interface CreateBranchInput {
  /**
   * 
   * @type {number}
   * @memberof CreateBranchInput
   */
  'fromBranch'?: number;
  /**
   * 
   * @type {string}
   * @memberof CreateBranchInput
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof CreateBranchInput
   */
  'description'?: string;
}

/**
 * 
 * @export
 * @interface CreateCollectionInput
 */
export interface CreateCollectionInput {
  /**
   * 
   * @type {string}
   * @memberof CreateCollectionInput
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof CreateCollectionInput
   */
  'handle'?: string;
  /**
   * 
   * @type {any}
   * @memberof CreateCollectionInput
   */
  'file'?: any;
  /**
   * 
   * @type {string}
   * @memberof CreateCollectionInput
   */
  'locale'?: string;
}

/**
 * 
 * @export
 * @interface Key
 */
export interface Key {
  /**
   * 
   * @type {number}
   * @memberof Key
   */
  'id'?: number;
  /**
   * 
   * @type {string}
   * @memberof Key
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof Key
   */
  'description'?: string;
  /**
   * 
   * @type {string}
   * @memberof Key
   */
  'value'?: string;
  /**
   * 
   * @type {boolean}
   * @memberof Key
   */
  'archived'?: boolean;
}

/**
 * 
 * @export
 * @interface Locale
 */
export interface Locale {
  /**
   * 
   * @type {string}
   * @memberof Locale
   */
  'code': string;
  /**
   * 
   * @type {string}
   * @memberof Locale
   */
  'name': string;
}

/**
 * 
 * @export
 * @interface PublishBranchInput
 */
export interface PublishBranchInput {
  /**
   * 
   * @type {string}
   * @memberof PublishBranchInput
   */
  'releaseName'?: string;
  /**
   * 
   * @type {string}
   * @memberof PublishBranchInput
   */
  'releaseDesc'?: string;
}

/**
 * 
 * @export
 * @interface Release
 */
export interface Release {
  /**
   * 
   * @type {number}
   * @memberof Release
   */
  'id'?: number;
  /**
   * 
   * @type {string}
   * @memberof Release
   */
  'name'?: string;
  /**
   * 
   * @type {string}
   * @memberof Release
   */
  'description'?: string;
  /**
   * 
   * @type {string}
   * @memberof Release
   */
  'createdAt'?: string;
}

/**
 * 
 * @export
 * @interface UpdateKeyInput
 */
export interface UpdateKeyInput {
  /**
   * 
   * @type {string}
   * @memberof UpdateKeyInput
   */
  'locale'?: string;
  /**
   * 
   * @type {Key}
   * @memberof UpdateKeyInput
   */
  'key'?: Key;
}


/**
 * BranchApi - fetch parameter creator
 */
const BranchApiFetchParamCreator = function () {
  return {
    /**
      * 
      * @summary create a Branch
      * @param {CreateBranchInput} [createBranchInput] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createBranch(createBranchInput?: CreateBranchInput, options: any = {}): FetchArgs {
      const localVarPath = `/branches`;
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      localVarHeaderParameter['Content-Type'] = 'application/json';

      if (options.urlencoded) {
        localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
      }


      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      output['body'] = createBranchInput
      return output;
    },
    /**
      * 
      * @summary to discard a branch changes
      * @param {number} branchId 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    discardDraft(branchId: number, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling discardDraft.');
      }
      const localVarPath = `/branches/{branchId}/discard_draft`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
    /**
      * 
      * @summary get all branches
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getBranches(options: any = {}): FetchArgs {
      const localVarPath = `/branches`;
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
    /**
      * 
      * @summary to get the collections of a branch for a live or draft version
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getCollections(branchId: number, versionId: string, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling getCollections.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling getCollections.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
    /**
      * 
      * @summary to publish a branch changes
      * @param {number} branchId 
      * @param {PublishBranchInput} [publishBranchInput] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    publishDraft(branchId: number, publishBranchInput?: PublishBranchInput, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling publishDraft.');
      }
      const localVarPath = `/branches/{branchId}/publish`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      localVarHeaderParameter['Content-Type'] = 'application/json';

      if (options.urlencoded) {
        localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
      }


      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      output['body'] = publishBranchInput
      return output;
    },
  }
};

/**
 * BranchApi - object-oriented interface
 * @export
 * @class BranchApi
 */
export class BranchApiBase {
  /**
    * 
    * @summary create a Branch
    * @param {CreateBranchInput} [createBranchInput] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BranchApi
    */
  public createBranch(createBranchInput?: CreateBranchInput, options?: any): Promise<{}> {
    const localVarFetchArgs = BranchApiFetchParamCreator().createBranch(createBranchInput, options);
    return <Promise<{}>>CBClient.perform("POST", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to discard a branch changes
    * @param {number} branchId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BranchApi
    */
  public discardDraft(branchId: number, options?: any): Promise<{}> {
    const localVarFetchArgs = BranchApiFetchParamCreator().discardDraft(branchId, options);
    return <Promise<{}>>CBClient.perform("POST", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary get all branches
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BranchApi
    */
  public getBranches(options?: any): Promise<Array<Branch>> {
    const localVarFetchArgs = BranchApiFetchParamCreator().getBranches(options);
    return <Promise<Array<Branch>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to get the collections of a branch for a live or draft version
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BranchApi
    */
  public getCollections(branchId: number, versionId: string, options?: any): Promise<Array<Collection>> {
    const localVarFetchArgs = BranchApiFetchParamCreator().getCollections(branchId, versionId, options);
    return <Promise<Array<Collection>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to publish a branch changes
    * @param {number} branchId 
    * @param {PublishBranchInput} [publishBranchInput] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BranchApi
    */
  public publishDraft(branchId: number, publishBranchInput?: PublishBranchInput, options?: any): Promise<Array<Release>> {
    const localVarFetchArgs = BranchApiFetchParamCreator().publishDraft(branchId, publishBranchInput, options);
    return <Promise<Array<Release>>>CBClient.perform("POST", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
}

/**
 * CollectionApi - fetch parameter creator
 */
const CollectionApiFetchParamCreator = function () {
  return {
    /**
      * 
      * @summary to create a collection
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {CreateCollectionInput} [createCollectionInput] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createCollection(branchId: number, versionId: string, createCollectionInput?: CreateCollectionInput, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling createCollection.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling createCollection.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      localVarHeaderParameter['Content-Type'] = 'application/json';

      if (options.urlencoded) {
        localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
      }


      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      output['body'] = createCollectionInput
      return output;
    },
    /**
      * 
      * @summary to create or update a key
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {number} collectionId 
      * @param {UpdateKeyInput} [updateKeyInput] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createOrUpdateKey(branchId: number, versionId: string, collectionId: number, updateKeyInput?: UpdateKeyInput, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling createOrUpdateKey.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling createOrUpdateKey.');
      }
      // verify required parameter 'collectionId' is not null or undefined
      if (collectionId === null || collectionId === undefined) {
        throw new RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling createOrUpdateKey.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections/{collectionId}/keys`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
        .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      localVarHeaderParameter['Content-Type'] = 'application/json';

      if (options.urlencoded) {
        localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
      }


      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      output['body'] = updateKeyInput
      return output;
    },
    /**
      * 
      * @summary to get the collections of a branch for a live or draft version
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getCollections(branchId: number, versionId: string, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling getCollections.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling getCollections.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
    /**
      * 
      * @summary to get the keys of a collections
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {number} collectionId 
      * @param {string} locale 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getKeys(branchId: number, versionId: string, collectionId: number, locale: string, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'collectionId' is not null or undefined
      if (collectionId === null || collectionId === undefined) {
        throw new RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'locale' is not null or undefined
      if (locale === null || locale === undefined) {
        throw new RequiredError('locale', 'Required parameter locale was null or undefined when calling getKeys.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections/{collectionId}/keys`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
        .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      if (locale !== undefined) {
        localVarQueryParameter['locale'] = locale;
      }

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
  }
};

/**
 * CollectionApi - object-oriented interface
 * @export
 * @class CollectionApi
 */
export class CollectionApiBase {
  /**
    * 
    * @summary to create a collection
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {CreateCollectionInput} [createCollectionInput] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CollectionApi
    */
  public createCollection(branchId: number, versionId: string, createCollectionInput?: CreateCollectionInput, options?: any): Promise<{}> {
    const localVarFetchArgs = CollectionApiFetchParamCreator().createCollection(branchId, versionId, createCollectionInput, options);
    return <Promise<{}>>CBClient.perform("POST", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to create or update a key
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {number} collectionId 
    * @param {UpdateKeyInput} [updateKeyInput] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CollectionApi
    */
  public createOrUpdateKey(branchId: number, versionId: string, collectionId: number, updateKeyInput?: UpdateKeyInput, options?: any): Promise<{}> {
    const localVarFetchArgs = CollectionApiFetchParamCreator().createOrUpdateKey(branchId, versionId, collectionId, updateKeyInput, options);
    return <Promise<{}>>CBClient.perform("PUT", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to get the collections of a branch for a live or draft version
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CollectionApi
    */
  public getCollections(branchId: number, versionId: string, options?: any): Promise<Array<Collection>> {
    const localVarFetchArgs = CollectionApiFetchParamCreator().getCollections(branchId, versionId, options);
    return <Promise<Array<Collection>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary to get the keys of a collections
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {number} collectionId 
    * @param {string} locale 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CollectionApi
    */
  public getKeys(branchId: number, versionId: string, collectionId: number, locale: string, options?: any): Promise<Array<Key>> {
    const localVarFetchArgs = CollectionApiFetchParamCreator().getKeys(branchId, versionId, collectionId, locale, options);
    return <Promise<Array<Key>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
}

/**
 * KeysApi - fetch parameter creator
 */
const KeysApiFetchParamCreator = function () {
  return {
    /**
      * 
      * @summary to get the keys of a collections
      * @param {number} branchId 
      * @param {string} versionId 
      * @param {number} collectionId 
      * @param {string} locale 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getKeys(branchId: number, versionId: string, collectionId: number, locale: string, options: any = {}): FetchArgs {
      // verify required parameter 'branchId' is not null or undefined
      if (branchId === null || branchId === undefined) {
        throw new RequiredError('branchId', 'Required parameter branchId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'versionId' is not null or undefined
      if (versionId === null || versionId === undefined) {
        throw new RequiredError('versionId', 'Required parameter versionId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'collectionId' is not null or undefined
      if (collectionId === null || collectionId === undefined) {
        throw new RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling getKeys.');
      }
      // verify required parameter 'locale' is not null or undefined
      if (locale === null || locale === undefined) {
        throw new RequiredError('locale', 'Required parameter locale was null or undefined when calling getKeys.');
      }
      const localVarPath = `/branches/{branchId}/{versionId}/collections/{collectionId}/keys`
        .replace(`{${"branchId"}}`, encodeURIComponent(String(branchId)))
        .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
        .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      if (locale !== undefined) {
        localVarQueryParameter['locale'] = locale;
      }

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
  }
};

/**
 * KeysApi - object-oriented interface
 * @export
 * @class KeysApi
 */
export class KeysApiBase {
  /**
    * 
    * @summary to get the keys of a collections
    * @param {number} branchId 
    * @param {string} versionId 
    * @param {number} collectionId 
    * @param {string} locale 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof KeysApi
    */
  public getKeys(branchId: number, versionId: string, collectionId: number, locale: string, options?: any): Promise<Array<Key>> {
    const localVarFetchArgs = KeysApiFetchParamCreator().getKeys(branchId, versionId, collectionId, locale, options);
    return <Promise<Array<Key>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
}

/**
 * LocaleApi - fetch parameter creator
 */
const LocaleApiFetchParamCreator = function () {
  return {
    /**
      * 
      * @summary create a Locale
      * @param {Locale} [locale] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createLocale(locale?: Locale, options: any = {}): FetchArgs {
      const localVarPath = `/locales`;
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      localVarHeaderParameter['Content-Type'] = 'application/json';

      if (options.urlencoded) {
        localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
      }


      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      output['body'] = locale
      return output;
    },
    /**
      * 
      * @summary get all locales
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getLocales(options: any = {}): FetchArgs {
      const localVarPath = `/locales`;
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
  }
};

/**
 * LocaleApi - object-oriented interface
 * @export
 * @class LocaleApi
 */
export class LocaleApiBase {
  /**
    * 
    * @summary create a Locale
    * @param {Locale} [locale] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof LocaleApi
    */
  public createLocale(locale?: Locale, options?: any): Promise<{}> {
    const localVarFetchArgs = LocaleApiFetchParamCreator().createLocale(locale, options);
    return <Promise<{}>>CBClient.perform("POST", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
  /**
    * 
    * @summary get all locales
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof LocaleApi
    */
  public getLocales(options?: any): Promise<Array<Locale>> {
    const localVarFetchArgs = LocaleApiFetchParamCreator().getLocales(options);
    return <Promise<Array<Locale>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
}

/**
 * ReleaseApi - fetch parameter creator
 */
const ReleaseApiFetchParamCreator = function () {
  return {
    /**
      * 
      * @summary get all releases
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getReleases(options: any = {}): FetchArgs {
      const localVarPath = `/releases`;
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      let output = {
        url: localVarPath,
        headers: Object.assign(localVarHeaderParameter, options),
        queryParams: localVarQueryParameter,
      };
      return output;
    },
  }
};

/**
 * ReleaseApi - object-oriented interface
 * @export
 * @class ReleaseApi
 */
export class ReleaseApiBase {
  /**
    * 
    * @summary get all releases
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReleaseApi
    */
  public getReleases(options?: any): Promise<Array<Release>> {
    const localVarFetchArgs = ReleaseApiFetchParamCreator().getReleases(options);
    return <Promise<Array<Release>>>CBClient.perform("GET", localVarFetchArgs.url, localVarFetchArgs.queryParams, localVarFetchArgs.headers, localVarFetchArgs.body)
  }
}

