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
 * @interface ModelUpdateUserRequest
 */
export interface ModelUpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelUpdateUserRequest
     */
    first_name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelUpdateUserRequest
     */
    is_active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelUpdateUserRequest
     */
    last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelUpdateUserRequest
     */
    role?: ModelUpdateUserRequestRoleEnum;
}


/**
 * @export
 */
export const ModelUpdateUserRequestRoleEnum = {
    Admin: 'admin',
    StandardUser: 'standard-user',
    ReadOnlyUser: 'read-only-user'
} as const;
export type ModelUpdateUserRequestRoleEnum = typeof ModelUpdateUserRequestRoleEnum[keyof typeof ModelUpdateUserRequestRoleEnum];


/**
 * Check if a given object implements the ModelUpdateUserRequest interface.
 */
export function instanceOfModelUpdateUserRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelUpdateUserRequestFromJSON(json: any): ModelUpdateUserRequest {
    return ModelUpdateUserRequestFromJSONTyped(json, false);
}

export function ModelUpdateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelUpdateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'is_active': !exists(json, 'is_active') ? undefined : json['is_active'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function ModelUpdateUserRequestToJSON(value?: ModelUpdateUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.first_name,
        'is_active': value.is_active,
        'last_name': value.last_name,
        'role': value.role,
    };
}
