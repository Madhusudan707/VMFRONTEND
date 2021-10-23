import gql from 'graphql-tag';

const CANDIDATE_PERSONAL_DETAILS_QUERY = gql`
  query CandidatePersonalDetails($id: Int!) {
    candidate(id: $id) {
      firstName
      lastName
      email
      mobile
      whatsappNumber
      locationArea {
        id
        name
        pincode
        locationDistrict {
          id
          name
        }
        locationState {
          id
          name
        }
      }
      personalDetail {
        dateOfBirth
        gender
        fathersName
      }
      profilePicture {
        profilePicture
      }
    }
  }
`;

export default CANDIDATE_PERSONAL_DETAILS_QUERY;
