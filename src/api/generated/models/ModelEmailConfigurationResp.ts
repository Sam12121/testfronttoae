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
 * @interface ModelEmailConfigurationResp
 */
export interface ModelEmailConfigurationResp {
    /**
     * 
     * @type {number}
     * @memberof ModelEmailConfigurationResp
     */
    created_by_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelEmailConfigurationResp
     */
    email_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelEmailConfigurationResp
     */
    email_provider?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelEmailConfigurationResp
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelEmailConfigurationResp
     */
    port?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelEmailConfigurationResp
     */
    ses_region?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelEmailConfigurationResp
     */
    smtp?: string;
}

/**
 * Check if a given object implements the ModelEmailConfigurationResp interface.
 */
export function instanceOfModelEmailConfigurationResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelEmailConfigurationRespFromJSON(json: any): ModelEmailConfigurationResp {
    return ModelEmailConfigurationRespFromJSONTyped(json, false);
}

export function ModelEmailConfigurationRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelEmailConfigurationResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_by_user_id': !exists(json, 'created_by_user_id') ? undefined : json['created_by_user_id'],
        'email_id': !exists(json, 'email_id') ? undefined : json['email_id'],
        'email_provider': !exists(json, 'email_provider') ? undefined : json['email_provider'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'ses_region': !exists(json, 'ses_region') ? undefined : json['ses_region'],
        'smtp': !exists(json, 'smtp') ? undefined : json['smtp'],
    };
}

export function ModelEmailConfigurationRespToJSON(value?: ModelEmailConfigurationResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_by_user_id': value.created_by_user_id,
        'email_id': value.email_id,
        'email_provider': value.email_provider,
        'id': value.id,
        'port': value.port,
        'ses_region': value.ses_region,
        'smtp': value.smtp,
    };
}
