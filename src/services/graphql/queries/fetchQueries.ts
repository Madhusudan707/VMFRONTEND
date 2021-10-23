export const GET_STATE_LIST = `query {
    locationStates {
      id
      name
    }
  }`;

export const GET_LOCATION_ID_LIST = `query($searchText: String!) {
    searchLocation(searchText: $searchText) {
      area
      district
      district_id
      id
      pincode
      state
      state_id
    }
  }`;

export const GET_VM_PROFILE = `query GetVmProfile(
    $mobile: String!
){
    getVmDetail(mobile: $mobile) {
        id
        name
        mobile
        gender
        email
        mitraCode
        stateId
        createdTimeStamp
        updatedTimeStamp
        createdBy
        updatedBy
    }
}`;
export const GET_VM_CANDIDATE = `query GetVmProfile(
    $id: String!
    $size: Float!
    $from: Float!
){
    getCandidateDetails(id: $id, from: $from, size: $size) {
        id
        firstName
        lastName
        createdBy
        isMobileVerified
        locationArea {
            id
            name
            pincode
        }
    }
}`;
export const GET_ALL_INDUSTERIES = `query GetIndustriesAndItsJobsCategories {
    allIndustries {
        id
        name
        icon
        
    }
}`;
