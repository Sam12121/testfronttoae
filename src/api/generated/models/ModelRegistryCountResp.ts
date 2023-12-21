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
 * @interface ModelRegistryCountResp
 */
export interface ModelRegistryCountResp {
    /**
     * 
     * @type {number}
     * @memberof ModelRegistryCountResp
     */
    count?: number;
}

/**
 * Check if a given object implements the ModelRegistryCountResp interface.
 */
export function instanceOfModelRegistryCountResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelRegistryCountRespFromJSON(json: any): ModelRegistryCountResp {
    return ModelRegistryCountRespFromJSONTyped(json, false);
}

export function ModelRegistryCountRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegistryCountResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ModelRegistryCountRespToJSON(value?: ModelRegistryCountResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
    };
}

