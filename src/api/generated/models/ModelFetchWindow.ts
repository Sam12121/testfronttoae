/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@toae.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelFetchWindow
 */
export interface ModelFetchWindow {
    /**
     * 
     * @type {number}
     * @memberof ModelFetchWindow
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof ModelFetchWindow
     */
    size: number;
}

/**
 * Check if a given object implements the ModelFetchWindow interface.
 */
export function instanceOfModelFetchWindow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function ModelFetchWindowFromJSON(json: any): ModelFetchWindow {
    return ModelFetchWindowFromJSONTyped(json, false);
}

export function ModelFetchWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelFetchWindow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': json['offset'],
        'size': json['size'],
    };
}

export function ModelFetchWindowToJSON(value?: ModelFetchWindow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'size': value.size,
    };
}

