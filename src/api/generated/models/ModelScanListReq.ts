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
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';
import type { ModelNodeIdentifier } from './ModelNodeIdentifier';
import {
    ModelNodeIdentifierFromJSON,
    ModelNodeIdentifierFromJSONTyped,
    ModelNodeIdentifierToJSON,
} from './ModelNodeIdentifier';
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface ModelScanListReq
 */
export interface ModelScanListReq {
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof ModelScanListReq
     */
    fields_filter: ReportersFieldsFilters;
    /**
     * 
     * @type {Array<ModelNodeIdentifier>}
     * @memberof ModelScanListReq
     */
    node_ids: Array<ModelNodeIdentifier> | null;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ModelScanListReq
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the ModelScanListReq interface.
 */
export function instanceOfModelScanListReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fields_filter" in value;
    isInstance = isInstance && "node_ids" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function ModelScanListReqFromJSON(json: any): ModelScanListReq {
    return ModelScanListReqFromJSONTyped(json, false);
}

export function ModelScanListReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanListReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields_filter': ReportersFieldsFiltersFromJSON(json['fields_filter']),
        'node_ids': (json['node_ids'] === null ? null : (json['node_ids'] as Array<any>).map(ModelNodeIdentifierFromJSON)),
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function ModelScanListReqToJSON(value?: ModelScanListReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields_filter': ReportersFieldsFiltersToJSON(value.fields_filter),
        'node_ids': (value.node_ids === null ? null : (value.node_ids as Array<any>).map(ModelNodeIdentifierToJSON)),
        'window': ModelFetchWindowToJSON(value.window),
    };
}

