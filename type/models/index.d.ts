export interface ITransformation {
    id: string;
    title: string;
    transformationType: string;
    secureUrl: string;
    width?: number | null;
    height?: number | null;
    transformationUrl?: string | null;
    aspectRatio?: string | null;
    color?: string | null;
    prompt?: string | null;
    author: IUser;
    authorClerkId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    clerkId: string;
    email: string;
    name: string;
    planId: string;
    balance: number;
}

export interface ITransaction {
    id: string;
    createdAt: Date;
    stripeId: string;
    amount: number;
    plan: string;
    credits: number;
    client: IUser;
    clientClerkId: string;
}
