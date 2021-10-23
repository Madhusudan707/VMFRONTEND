export const UPDATE_VM_PROFILE = `mutation VmProfileMutation (
    $data: ProfileInput!
){
    updateVmProfile(
        data: $data
    ){
        id
        name
        mobile
        gender
        email
        mitraCode
        locationAreaId
        isVerified
        createdTimeStamp
        updatedTimeStamp
        createdBy
        updatedBy
    }
}`;
