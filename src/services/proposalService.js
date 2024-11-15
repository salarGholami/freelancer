import http from "./httpService";

export function changeProposalApi({ proposalId, ...rest }) {
  return http
    .patch(`/proposal/${proposalId}`, rest)
    .then(({ data }) => data.data);
}

export function getProposalApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
