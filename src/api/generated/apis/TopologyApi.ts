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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ControlsAgentBeat,
  GraphTopologyFilters,
  IngestersReportIngestionData,
  ModelGraphResult,
  ModelTopologyDeltaReq,
  ModelTopologyDeltaResponse,
  ReportRawReport,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ControlsAgentBeatFromJSON,
    ControlsAgentBeatToJSON,
    GraphTopologyFiltersFromJSON,
    GraphTopologyFiltersToJSON,
    IngestersReportIngestionDataFromJSON,
    IngestersReportIngestionDataToJSON,
    ModelGraphResultFromJSON,
    ModelGraphResultToJSON,
    ModelTopologyDeltaReqFromJSON,
    ModelTopologyDeltaReqToJSON,
    ModelTopologyDeltaResponseFromJSON,
    ModelTopologyDeltaResponseToJSON,
    ReportRawReportFromJSON,
    ReportRawReportToJSON,
} from '../models';

export interface GetContainersTopologyGraphRequest {
    graphTopologyFilters?: GraphTopologyFilters;
}

export interface GetHostsTopologyGraphRequest {
    graphTopologyFilters?: GraphTopologyFilters;
}

export interface GetKubernetesTopologyGraphRequest {
    graphTopologyFilters?: GraphTopologyFilters;
}

export interface GetPodsTopologyGraphRequest {
    graphTopologyFilters?: GraphTopologyFilters;
}

export interface GetTopologyDeltaRequest {
    modelTopologyDeltaReq?: ModelTopologyDeltaReq;
}

export interface GetTopologyGraphRequest {
    graphTopologyFilters?: GraphTopologyFilters;
}

export interface IngestAgentReportRequest {
    reportRawReport?: ReportRawReport;
}

export interface IngestSyncAgentReportRequest {
    ingestersReportIngestionData?: IngestersReportIngestionData;
}

/**
 * TopologyApi - interface
 * 
 * @export
 * @interface TopologyApiInterface
 */
export interface TopologyApiInterface {
    /**
     * Retrieve the full topology graph associated with the account from Containers
     * @summary Get Containers Topology Graph
     * @param {GraphTopologyFilters} [graphTopologyFilters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getContainersTopologyGraphRaw(requestParameters: GetContainersTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>>;

    /**
     * Retrieve the full topology graph associated with the account from Containers
     * Get Containers Topology Graph
     */
    getContainersTopologyGraph(requestParameters: GetContainersTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult>;

    /**
     * Retrieve the full topology graph associated with the account from Hosts
     * @summary Get Hosts Topology Graph
     * @param {GraphTopologyFilters} [graphTopologyFilters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getHostsTopologyGraphRaw(requestParameters: GetHostsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>>;

    /**
     * Retrieve the full topology graph associated with the account from Hosts
     * Get Hosts Topology Graph
     */
    getHostsTopologyGraph(requestParameters: GetHostsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult>;

    /**
     * Retrieve the full topology graph associated with the account from Kubernetes
     * @summary Get Kubernetes Topology Graph
     * @param {GraphTopologyFilters} [graphTopologyFilters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getKubernetesTopologyGraphRaw(requestParameters: GetKubernetesTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>>;

    /**
     * Retrieve the full topology graph associated with the account from Kubernetes
     * Get Kubernetes Topology Graph
     */
    getKubernetesTopologyGraph(requestParameters: GetKubernetesTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult>;

    /**
     * Retrieve the full topology graph associated with the account from Pods
     * @summary Get Pods Topology Graph
     * @param {GraphTopologyFilters} [graphTopologyFilters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getPodsTopologyGraphRaw(requestParameters: GetPodsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>>;

    /**
     * Retrieve the full topology graph associated with the account from Pods
     * Get Pods Topology Graph
     */
    getPodsTopologyGraph(requestParameters: GetPodsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult>;

    /**
     * Retrieve addition or deletion toplogy deltas
     * @summary Get Topology Delta
     * @param {ModelTopologyDeltaReq} [modelTopologyDeltaReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getTopologyDeltaRaw(requestParameters: GetTopologyDeltaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelTopologyDeltaResponse>>;

    /**
     * Retrieve addition or deletion toplogy deltas
     * Get Topology Delta
     */
    getTopologyDelta(requestParameters: GetTopologyDeltaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelTopologyDeltaResponse>;

    /**
     * Retrieve the full topology graph associated with the account
     * @summary Get Topology Graph
     * @param {GraphTopologyFilters} [graphTopologyFilters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    getTopologyGraphRaw(requestParameters: GetTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>>;

    /**
     * Retrieve the full topology graph associated with the account
     * Get Topology Graph
     */
    getTopologyGraph(requestParameters: GetTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult>;

    /**
     * Ingest data reported by one Agent
     * @summary Ingest Topology Data
     * @param {ReportRawReport} [reportRawReport] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    ingestAgentReportRaw(requestParameters: IngestAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentBeat>>;

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    ingestAgentReport(requestParameters: IngestAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentBeat>;

    /**
     * Ingest data reported by one Agent
     * @summary Ingest Topology Data
     * @param {IngestersReportIngestionData} [ingestersReportIngestionData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopologyApiInterface
     */
    ingestSyncAgentReportRaw(requestParameters: IngestSyncAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    ingestSyncAgentReport(requestParameters: IngestSyncAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class TopologyApi extends runtime.BaseAPI implements TopologyApiInterface {

    /**
     * Retrieve the full topology graph associated with the account from Containers
     * Get Containers Topology Graph
     */
    async getContainersTopologyGraphRaw(requestParameters: GetContainersTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/containers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphTopologyFiltersToJSON(requestParameters.graphTopologyFilters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGraphResultFromJSON(jsonValue));
    }

    /**
     * Retrieve the full topology graph associated with the account from Containers
     * Get Containers Topology Graph
     */
    async getContainersTopologyGraph(requestParameters: GetContainersTopologyGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult> {
        const response = await this.getContainersTopologyGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the full topology graph associated with the account from Hosts
     * Get Hosts Topology Graph
     */
    async getHostsTopologyGraphRaw(requestParameters: GetHostsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/hosts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphTopologyFiltersToJSON(requestParameters.graphTopologyFilters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGraphResultFromJSON(jsonValue));
    }

    /**
     * Retrieve the full topology graph associated with the account from Hosts
     * Get Hosts Topology Graph
     */
    async getHostsTopologyGraph(requestParameters: GetHostsTopologyGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult> {
        const response = await this.getHostsTopologyGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the full topology graph associated with the account from Kubernetes
     * Get Kubernetes Topology Graph
     */
    async getKubernetesTopologyGraphRaw(requestParameters: GetKubernetesTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/kubernetes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphTopologyFiltersToJSON(requestParameters.graphTopologyFilters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGraphResultFromJSON(jsonValue));
    }

    /**
     * Retrieve the full topology graph associated with the account from Kubernetes
     * Get Kubernetes Topology Graph
     */
    async getKubernetesTopologyGraph(requestParameters: GetKubernetesTopologyGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult> {
        const response = await this.getKubernetesTopologyGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the full topology graph associated with the account from Pods
     * Get Pods Topology Graph
     */
    async getPodsTopologyGraphRaw(requestParameters: GetPodsTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/pods`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphTopologyFiltersToJSON(requestParameters.graphTopologyFilters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGraphResultFromJSON(jsonValue));
    }

    /**
     * Retrieve the full topology graph associated with the account from Pods
     * Get Pods Topology Graph
     */
    async getPodsTopologyGraph(requestParameters: GetPodsTopologyGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult> {
        const response = await this.getPodsTopologyGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve addition or deletion toplogy deltas
     * Get Topology Delta
     */
    async getTopologyDeltaRaw(requestParameters: GetTopologyDeltaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelTopologyDeltaResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/delta`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelTopologyDeltaReqToJSON(requestParameters.modelTopologyDeltaReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelTopologyDeltaResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve addition or deletion toplogy deltas
     * Get Topology Delta
     */
    async getTopologyDelta(requestParameters: GetTopologyDeltaRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelTopologyDeltaResponse> {
        const response = await this.getTopologyDeltaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the full topology graph associated with the account
     * Get Topology Graph
     */
    async getTopologyGraphRaw(requestParameters: GetTopologyGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGraphResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/graph/topology/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphTopologyFiltersToJSON(requestParameters.graphTopologyFilters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGraphResultFromJSON(jsonValue));
    }

    /**
     * Retrieve the full topology graph associated with the account
     * Get Topology Graph
     */
    async getTopologyGraph(requestParameters: GetTopologyGraphRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGraphResult> {
        const response = await this.getTopologyGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    async ingestAgentReportRaw(requestParameters: IngestAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ControlsAgentBeat>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/ingest/report`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReportRawReportToJSON(requestParameters.reportRawReport),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ControlsAgentBeatFromJSON(jsonValue));
    }

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    async ingestAgentReport(requestParameters: IngestAgentReportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ControlsAgentBeat> {
        const response = await this.ingestAgentReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    async ingestSyncAgentReportRaw(requestParameters: IngestSyncAgentReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/ingest/sync-report`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IngestersReportIngestionDataToJSON(requestParameters.ingestersReportIngestionData),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest data reported by one Agent
     * Ingest Topology Data
     */
    async ingestSyncAgentReport(requestParameters: IngestSyncAgentReportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestSyncAgentReportRaw(requestParameters, initOverrides);
    }

}
