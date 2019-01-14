export interface UserInfoData {
    id: number;
    username: string;
    email: string;
    mobile: string;
    banned: boolean;
    recycle: boolean;
    createdAt: string;
    updatedAt: string;
    userRoles: {
        id: number;
        name: string
    }[];
    userOrganizations: {
        id: number;
        name: string;
    }[];
    userInfos: {
        id: number;
        order: number;
        infoItemId: number;
        type: string;
        name: string;
        value: string;
        description: string;
        registerDisplay: boolean;
        informationDisplay: boolean;
    }[];
}

export interface CreateUserInput {
    username?: string;
    email?: string;
    mobile?: string;
    password: string;
    infoKVs?: { key: number; value: string }[];
    roleIds?: number[];
    organizationIds?: number[];
}

export interface UpdateUserInput {
    username?: string;
    email?: string;
    mobile?: string;
    password?: string;
    status: number;
    certification: number;
    infoKVs?: {
        key: number;
        value: string;
        relationId?: number
    }[];
    roleIds?: {
        before: number;
        after: number;
    }[];
    organizationIds?: {
        before: number;
        after: number;
    }[];
}