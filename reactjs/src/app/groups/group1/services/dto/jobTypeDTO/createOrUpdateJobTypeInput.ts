
export interface CreateOrUpdateJobTypeInput {
    name: string,
    displayName: string,
    normalizedName: string,
    description: string,
    grantedPermissions: [
        string
    ]
}